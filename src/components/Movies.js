import React, { useState } from 'react'
import Movieform from './movie/Movieform';
import 'h8k-components'
import Search from './movie/Search';
import Movieslist from './movie/MoviesList';
const title = 'Favorite Movie Directory'

const Movies = () => {
    const [movies, setMovies] = useState([
        {
          name: "JonHurry",
          Ratings: 10,
          Duration:"2hrs"
    
        },
        {
          name: "Prison Break",
          Ratings: 10,
          Duration:"2:30hrs"
        },
        {
          name: "live or Die",
          Ratings: 10,
          Duration:"1hrs"
        }
      ]);
      const addMovies = name => {
        const newMovies =[...movies, {name}];
        setMovies(newMovies)
      }
  return (
    <div> 
        <h8k-navbar header={ title } />
    <div className='layout-row justify-content-center mt-100'>
      <div className='w-30 mr-75'>
        <Movieform  addMovies={addMovies}/>
      </div>
      <div className='layout-column w-30'>
        <Search />
        {movies.map((movie, index) =>(
       <Movieslist 
       key={movie.name}
       movie={movie}
       /> 

       
        ))}
       
        <div data-testid='noResult'>
          <h3 className='text-center'>No Results Found</h3>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default Movies