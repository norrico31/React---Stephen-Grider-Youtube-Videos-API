import { useState, useEffect } from 'react'
import youtube from '../api/youtube'

const KEY = 'AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc'

export default defaultSearchTerm => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async term => {
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
    }

    return [videos, search]
}