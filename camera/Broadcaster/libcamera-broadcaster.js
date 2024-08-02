const WebSocketServer = require('ws').Server;
const child = require('child_process');
const stream = require('stream');
const Splitter = require('stream-split');
const NALSeparator = Buffer.from([0, 0, 0, 1]);

var wsServer = null;
var headerFrames = [];
var latestIdrFrame = null;
var videoStream = null;

function createBroadcaster(options) {
    options = options || {};

    wsServer = new WebSocketServer({ port: options.port });
    wsServer.on('connection', (socket) => {
        socket.send(JSON.stringify({
            action: "init",
            width: options.width,
            height: options.height
        }));
        // Handle the case where latestIdrFrame might be null
        const initialData = Buffer.concat([
            ...headerFrames,
            latestIdrFrame || Buffer.alloc(0)
        ]);
        socket.send(initialData, { binary: true });
    });

    var args = [
        '--nopreview', '--output', '-', '--timeout', '0', '--profile', 'baseline'
    ];

    const { port, ...libcameraargs } = options;
    Object.keys(libcameraargs || {}).forEach(function (key) {
        args.push('--' + key);
        var val = options[key];
        if (val || val === 0) {
            args.push(val);
        }
    });

    // Run libcamera-vid with the provided arguments
    videoProcess = child.spawn('libcamera-vid', args, { stdio: ['ignore', 'pipe', 'inherit'] }).stdout;
    videoStream = videoProcess
        .pipe(new Splitter(NALSeparator))
        .pipe(new stream.Transform({
            transform: function (chunk, _encoding, callback) {
                const chunkType = chunk[0] & 0b11111;
                const chunkWithSeparator = Buffer.concat([NALSeparator, chunk]);

                if (chunkType === 7 || chunkType === 8) {
                    headerFrames.push(chunkWithSeparator);
                } else {
                    if (chunkType === 5) {
                        latestIdrFrame = chunkWithSeparator;
                    }
                    this.push(chunkWithSeparator);
                }

                callback();
            }
        }));

    videoStream.on('data', (data) => {
        wsServer.clients.forEach((socket) => {
            socket.send(data, { binary: true });
        });
    });

    videoProcess.on('error', (err) => {
        console.error('Failed to start video process:', err);
    });

    videoStream.on('error', (err) => {
        console.error('Video stream error:', err);
    });
}

class Broadcaster {
    constructor(options) {
        createBroadcaster(options);
        this.wsServer = wsServer;
        this.headerFrames = headerFrames;
        this.latestIdrFrame = latestIdrFrame;
        this.videoStream = videoStream;
    }
}

module.exports = Broadcaster;
