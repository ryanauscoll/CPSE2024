const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const wrtc = require('wrtc');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let senderStream;

io.on('connection', socket => {
    console.log('New client connected');

    socket.on('offer', async (offer) => {
        const peerConnection = new wrtc.RTCPeerConnection();

        peerConnection.ontrack = (event) => {
            senderStream = event.streams[0];
        };

        await peerConnection.setRemoteDescription(new wrtc.RTCSessionDescription(offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);

        socket.emit('answer', peerConnection.localDescription);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => console.log('Server is running on port 3000 yuh'));
//test