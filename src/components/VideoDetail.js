import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>
                </div>

    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <dispatchEvent className="video-container">
            <div className="video-iframe">
                <iframe src={videoSrc} allowFullScreen title="Video player" />
            </div> 
            <div className="video-iframe-details">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </dispatchEvent>
    );
};

export default VideoDetail;