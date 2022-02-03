import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div className='video-list-oi'>
                    <br />
                </div>

    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <dispatchEvent>
            <iframe src={videoSrc} allowFullScreen title="Video player" />  
            <div>
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </dispatchEvent>
    );
};

export default VideoDetail;