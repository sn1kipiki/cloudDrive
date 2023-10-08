import React from 'react'
import "./styles.scss"
import search from "./assets/search.svg"

function Search() {
  return (
    <div className='search'>
        <img src={search} alt='search icon' className='search__icon'/>
        <input className='search__input' placeholder='Search files...'/>
    </div>
  )
}

export default Search