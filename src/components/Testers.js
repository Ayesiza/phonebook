import React, { useState } from "react";
import "./App.css";
//import 'h8k-components'

// import Calculator from './components/Calculator'
// import Movies from './components/Movies'

function App() {
  const movies = [
    { name: "Prison Break", ratings: 20, duration: "2hrs" },
    { name: "Salt", ratings: 10, duration: "1hrs" },
    { name: "Live or Die", ratings: 30, duration: "3hrs" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search...."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <section>
        <ul className="styled w-100 pl-0" data-testid="moviesList">
          {movies
            .filter((movie) => {
              if (searchTerm === "") {
                return movie;
              } else if (
                movie.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return movie;
              }
            })
            .map((movie) => (
              <li
                key={movie.id}
                className="flex slide-up-fade-in justify-content-between"
                style={{ borderBottom: "2px solid var(--primary-color)" }}
              >
                <div className="layout-column w-40">
                  {/* use this header for movie name */}
                  <h3 className="my-3">{movie.name}</h3>
                  {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                  <p className="my-0">{movie.ratings}</p>
                </div>
                <div className="layout-row my-auto mr-20">
                  {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                  <p className="justify-content-end">{movie.duration}</p>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
