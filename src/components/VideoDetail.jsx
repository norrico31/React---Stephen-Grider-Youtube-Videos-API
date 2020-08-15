import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    const videoTitle = video.snippet.title
    const videoDesc = video.snippet.description

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
