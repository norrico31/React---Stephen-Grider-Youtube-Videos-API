import React, { useState } from 'react'

const SearchBar = ({ search }) => {
    const [term, setTerm] = useState('')
    
    const onFormSubmit = event => {
        event.preventDefault()
        search(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="vid">Search Videos</label>
                    <input type="text" id="vid" value={term} onChange={event => setTerm(event.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
