import React from 'react'
//import MoviesList from './MoviesList'

function Search({query, setQuery, searchMovies}) {

  

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
    <button  onClick={searchMovies}>search</button>
      </section>
  )
}

export default Search
