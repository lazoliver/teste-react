import React from "react";

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className='video-item' >
            <div>
                {video.snippet.title}
            </div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div>
                {video.snippet.description}
            </div>
        </div>
    )
};

export default VideoItem;