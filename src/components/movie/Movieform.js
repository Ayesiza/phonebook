import React from 'react'


function Movieform({addMovies,name,duration,ratings, setRatings, setDuration, setName}) {
  
  
  
  // const handleSubmit = e => {
  //   e.preventdefault();
  // }
  

  return (
    <div>
    <div className="card pa-30">
              <form  >
                <div className="layout-column mb-15">
                  <label className="mb-3">Movie Name</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter Movie Name"
                    data-testid="nameInput"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="layout-column mb-15">
                  <label htmlFor="ratings" className="mb-3">
                    Ratings
                  </label>
                  <input
                    type="number"
                    value={ratings}
                    id="ratings"
                    placeholder="Enter Rating on a scale of 1 to 100"
                    data-testid="ratingsInput"
                    onChange={(e) => setRatings(e.target.value)}
                  />
                </div>
                <div className="layout-column mb-30">
                  <label htmlFor="duration" className="mb-3">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={duration}
                    id="duration"
                    placeholder="Enter duration in hours or minutes"
                    data-testid="durationInput"
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                {/* Use this div when time format is invalid */}
                {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
                <div className="layout-row justify-content-end">
                  <button
                    type="button"
                    className="mx-0  py-4 px-4"
                    style={{padding:"10px"}}
                    onClick={addMovies}
                  >
                    Add Movie
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}

export default Movieform
