import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return(
            <div>
                <h1>Faça sua Busca...</h1>
                <br />
            </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div>
            <iframe src={videoSrc} allowFullScreen title="Video player" />  
            <div>
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;