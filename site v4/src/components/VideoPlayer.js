import React, { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = () => {
  useEffect(() => {
    const player = videojs('my-video', {
      controls: true,
      autoplay: true,
      preload: 'auto',
      sources: [{
        src: 'http://<10.85.254.219>:8080/hls/stream.m3u8',
        type: 'application/x-mpegURL'
      }]
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video id="my-video" className="video-js vjs-default-skin" width="640" height="360"></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
