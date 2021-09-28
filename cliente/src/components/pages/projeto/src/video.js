import React from "react";
import VideoPlayer from "react-video-js-player"
import video from "./video.mp4"

const VideoJS = () => {
    const amv = video;
    const poster = "./abelha.png"

    return(
        <div>
            <h1>pitch</h1>
            <VideoPlayer
                src={amv}
                poster={poster}
                width="720"
                height="420"         
            />
        </div>
    )
}

export default VideoJS