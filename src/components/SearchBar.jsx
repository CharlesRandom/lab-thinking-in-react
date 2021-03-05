import React from 'react'

const SearchBar = ({ onChange, showStock }) => {
  return (
    <div>
      <h2>Search</h2>
      <input type='text' placeholder='Search...' onChange={onChange} />
      <input type="checkbox" id="showStock" name="showStock" onChange={showStock} />
      <label htmlFor="showStock">Only show products on stock</label>
    </div>
  )
}

export default SearchBar