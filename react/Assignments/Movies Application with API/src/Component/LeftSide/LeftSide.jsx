import React from 'react';

export default function LightSide({ data, setSingleMovieID }) {
    // console.log(data.Search, "left Data");

    const gettingSingleMovie = (singleMovieID) => {
        // console.log(singleMovieID)
        setSingleMovieID(singleMovieID)

    }

    return (
        <section className="bg-[#0f3460] w-1/2 p-4 h-90 rounded-lg mx-4 scrollbarHidding">
            {data?.Search?.map((singleMovie) => (

                <div onClick={(singleMovieID) => gettingSingleMovie(singleMovie.imdbID)} className="d-flex mb-4" key={singleMovie.imdbID} >
                    <img width="40px" src={singleMovie.Poster} alt={singleMovie.Title} />
                    <div className="mx-4 text-white">
                        <h3>{singleMovie.Title}</h3>
                        <p>{singleMovie.Year}</p>
                    </div>
                </div>
            ))
            }
        </section >
    );
}
