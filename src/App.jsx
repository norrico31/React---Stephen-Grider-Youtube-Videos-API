import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import cors from 'cors'

// custom hooks
import useVideos from './hooks/useVideos'

const App = () => {
    cors()
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('tokyo ravens')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar search={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
