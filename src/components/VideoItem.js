import React from "react";

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className='video-item' >
            <div className="video-item-card">
                <div className="video-item-card-details">{video.snippet.title}</div>
                <div className="video-item-card-details"><img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/></div>
                <div className="video-item-card-details">{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoItem;