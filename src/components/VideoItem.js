import React from "react";

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className='video-item' >
            <div className="video-card">
                <div className="video-item-title">
                    {video.snippet.title}
                </div>
                <div className="video-item-img">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                </div>
                <div className="video-item-description">
                    {video.snippet.description}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;