import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, setSelectedVideo }) => {
    const videoTitle = video.snippet.title
    const image = video.snippet.thumbnails.medium.url
    
    return (
        <div className="item video-item" onClick={() => setSelectedVideo(video)}>
            <img className="ui image" src={image} alt={videoTitle} />
            <div className="content">
                <div className="header">
                    {videoTitle}
                </div>
            </div>
        </div>
    )
}

export default VideoItem
