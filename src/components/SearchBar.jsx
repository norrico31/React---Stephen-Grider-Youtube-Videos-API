import React, { useState } from 'react'

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('')
    
    const onFormSubmit = event => {
        event.preventDefault()
        onSearchSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="vid">Video Search</label>
                    <input type="text" id="vid" value={term} onChange={event => setTerm(event.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
