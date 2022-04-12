import React, { useState } from "react";
import Search from "./movie/Search";
import { v4 as uuidv4 } from "uuid";
import MoviesList from "./movie/MoviesList";
import Movieform from "./movie/Movieform";
const title = "Favorite Movie Directory";

const Movies = () => {
  const [movies, setMovies] = useState([
    { name: "Prison Break", ratings: 20, duration: "2hrs" },
    { name: "Salt", ratings: 10, duration: "1hrs" },
    { name: "Live or Die", ratings: 30, duration: "3hrs" },
  ]);
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState("");
  const [duration, setDuration] = useState("");
  const [query, setQuery] = useState("");

  const addMovies = () => {
    const newList = movies.concat({ name, ratings, duration, id: uuidv4() });
    setMovies(newList);
    setName("");
    setRatings("");
    setDuration("");
  };

  // const searchMovies = () => {
  //   const filterData = movies.filter((item) => {
  //     return item.name.toLowerCase().includes(query.toLowerCase());
  //   });
  //   console.log(filterData);
  // };
  
  
  return (
    <div>
      <h1>{title}</h1>
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform
            name={name}
            duration={duration}
            ratings={ratings}
            addMovies={addMovies}
            setName={setName}
            setRatings={setRatings}
            setDuration={setDuration}
          />
        </div>
        <div className="layout-column w-30">
          {/* search component */}
          <Search
            setQuery={setQuery}
            query={query}
           
          />
          {/* search component ends here */}
          <MoviesList
           movies={movies} 
           query={query}
          />

          <div data-testid="noResult">
              { query ===""? <h3 className="text-center">No Results Found</h3>:'' }
           
          </div>
        </div >
      </div>
    </div>
  );
};

export default Movies;
