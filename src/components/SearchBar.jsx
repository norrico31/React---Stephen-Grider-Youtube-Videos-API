import React, { useState } from 'react'

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('')

    const onInputChange = (event) => {
        setTerm(event.target.value)
    }
    
    const onFormSubmit = (e) => {
        e.preventDefault()
        onSearchSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="vid">Video Search</label>
                    <input type="text" id="vid" value={term} onChange={onInputChange}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
