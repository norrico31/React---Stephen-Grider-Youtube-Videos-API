import React from 'react'

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    const videoTitle = selectedVideo.snippet.title
    const videoDesc = selectedVideo.snippet.description

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="Video Player" />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{videoTitle}</h4>
                <p>{videoDesc}</p>
            </div>
        </div>
    )
}

export default VideoDetail
