import subprocess
import signal
import sys


command = (
    "rpicam-vid -t 0 -o - --width 854 --height 480 --framerate 24 --g 10 --codec libav "
    "--libav-format mpegts | ffmpeg -re -ar 44100 -ac 2 -acodec pcm_s16le -f s16le -ac 2 "
    "-i /dev/zero -f mpegts -i - -vcodec copy -acodec aac -ab 128k -g 10 -strict experimental "
    "-f flv rtmp://a.rtmp.youtube.com/live2/KEY" # replace KEY
)


process = subprocess.Popen(command, shell=True, preexec_fn=os.setsid)

def signal_handler(sig, frame):
    
    os.killpg(os.getpgid(process.pid), signal.SIGTERM)
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

print("Streaming started. Press Ctrl+C to stop.")


signal.pause()
