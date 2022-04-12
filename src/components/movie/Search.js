import React from 'react'
//import MoviesList from './MoviesList'

function Search({query, setQuery}) {

  

  return (
    <section className='layout-row justify-content-center mb-40'>
    <input 
      type='text'
      value={query}
      placeholder='Search for movie by name' 
      className='w-75 py-2'
      data-testid='search'
      onChange={(e) => setQuery(e.target.value)}
      
    />
    
      </section>
  )
}

export default Search
