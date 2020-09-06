import React, { useState, useEffect } from 'react'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const KEY = 'AIzaSyDFOTBUNnizGnkobiYzt3EbFCnE4RTDGBs'

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onTermSubmit('tokyo ravens')
    }, [])

    const onTermSubmit = async term => {
        const response = await youtube.get(`/search`, {
            params: {
                q: term,
                part: "snippet",
                maxResults: 10,
                type: 'video',
                key: KEY
            }
        })

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
