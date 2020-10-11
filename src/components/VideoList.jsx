import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, setSelectedVideo }) => {
    const renderedList = videos.map(video => (
        <VideoItem setSelectedVideo={setSelectedVideo} video={video} key={video.id.videoId} />
    ))

    return <div className="ui relaxed diveded list">{renderedList}</div>
}

export default VideoList
