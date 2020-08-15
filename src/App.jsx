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
        onTermSubmit('Nightcore')
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

        console.log(response.data.items)
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = (video) => {
        console.log('From the App!', video)
        setSelectedVideo(video)
    }

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
