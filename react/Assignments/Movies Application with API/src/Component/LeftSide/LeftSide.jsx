import React from 'react';
// import FatchingAPIs from '../FatchingAPIs';


export default function LightSide({ data, setSingleMovieID, watchedMovies, setWatchedMovies, setStateStar, setSearchedItems, checkRatedMovie, setRatedMovie, setMouseStars, setClickedStar, loader,setLoaderD }) {

    const gettingSingleMovie = (singleMovieID) => {
        setLoaderD(true)

        setStateStar(0)
        setMouseStars(0)
        setSingleMovieID(singleMovieID)
        setClickedStar(false)
        const isMovieWatched = checkRatedMovie.every(che => che.imdbID !== singleMovieID);
        if (isMovieWatched) {
            setWatchedMovies(true);
            // console.log("not matched");
            setRatedMovie(false)
        } else {
            setWatchedMovies(true);
            setRatedMovie(true)
        }
    }
    setSearchedItems(data?.Search?.length || 0)
    return (
        <section className="bg-[#0f3460] w-1/2 p-4 h-90 rounded-lg mx-4 scrollbarHidding">

            <h1 className='text-white text-xl m-4 absolute'>{loader ? "Loading..." : ""}</h1>
            {!loader && data?.Search?.map((singleMovie) => (
                <div onClick={(singleMovieID) => gettingSingleMovie(singleMovie.imdbID)} className="d-flex mb-4" key={singleMovie.imdbID}>
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
