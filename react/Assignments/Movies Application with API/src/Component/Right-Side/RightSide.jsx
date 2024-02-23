import React, { useEffect, useState } from 'react'
import { ClockIcon, FilmIcon } from "./Ratings"
import ClickedMovieDetail from './ClickedMovieDetail'

export default function RightSide({ watchedMovies, singleMovieID, setWatchedMovies, stateStar, setStateStar, setCheckRatedMovie, ratedMovie, checkRatedMovie, mouseStars, setMouseStars, setRatedMovie, clickedStar, setClickedStar, loader, setLoader, loaderD, setLoaderD }) {

    const [seenMovies, setSeenMovies] = useState(0)
    const [seenMoviesDetail, setSeenMoviesDetail] = useState()
    const [seenedMoviesArray, setSeenedMoviesArray] = useState([])
    const [movieTime, setMovieTime] = useState(0)
    const [moviesRating, setMoviesRating] = useState(0);
    const [settings, setSettings] = useState(false);
    const [movieDetailSetting, setMovieDetailSetting] = useState(false)
    const [starRating, setStarRating] = useState(0)

    useEffect(() => {
        if (settings && seenMoviesDetail && !seenedMoviesArray.some(movie => movie.imdbID === seenMoviesDetail.imdbID)) {
            const movieWithRating = { ...seenMoviesDetail, userRating: stateStar, checked: true };
            setSeenedMoviesArray(prevArray => [...prevArray, movieWithRating]);

            setSettings(false);
        }
    }, [settings, seenMoviesDetail, seenedMoviesArray, stateStar, movieTime]);

    setCheckRatedMovie(seenedMoviesArray)

    const removeWatchedMovie = (index) => {
        const newSeenedMoviesArray = [...seenedMoviesArray]
        newSeenedMoviesArray.splice(index, 1)
        setSeenedMoviesArray(newSeenedMoviesArray)
    }





    useEffect(() => {
        const movieRunTime = seenedMoviesArray?.reduce((prev, curr) => prev + parseInt(curr.Runtime), 0)
        setMovieTime(movieRunTime)

        const moviesRatted = seenedMoviesArray?.reduce((prev, curr) => prev + parseFloat(curr.imdbRating), 0)
        setMoviesRating(moviesRatted)

        const userRatings = seenedMoviesArray?.reduce((prev, curr) => prev + curr.userRating, 0)
        setStarRating(userRatings)

    }, [seenedMoviesArray])

    return (
        <>
            {
                watchedMovies && <ClickedMovieDetail
                    singleMovieID={singleMovieID}
                    setWatchedMovies={setWatchedMovies}
                    stateStar={stateStar}
                    setStateStar={setStateStar}
                    setSeenMovies={setSeenMovies}
                    seenMovies={seenMovies}
                    setSeenMoviesDetail={setSeenMoviesDetail}
                    setSettings={setSettings}
                    setMovieDetailSetting={setMovieDetailSetting}
                    ratedMovie={ratedMovie}
                    setRatedMovie={setRatedMovie}
                    checkRatedMovie={checkRatedMovie}
                    mouseStars={mouseStars}
                    setMouseStars={setMouseStars}
                    clickedStar={clickedStar}
                    setClickedStar={setClickedStar}
                    loader={loader}
                    setLoader={setLoader}
                    loaderD={loaderD}
                    setLoaderD={setLoaderD}
                />
            }


            {/* watched movies details */}
            {!watchedMovies && <section style={{ overflow: "scroll" }} className="bg-[#0f3460] w-1/2 p-4 rounded-lg scrollbarHidding text-white ">
                <h2 className="font-semibold">MOVIES YOU WATCHED</h2>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                        <FilmIcon className=" w-5 h-5" />
                        <span className="">{seenedMoviesArray?.length} movies</span>
                    </div>
                    <div className="flex items-center space-x-2">

                        <span className=""><i style={{ color: 'yellow' }} class="uis uis-star"></i>
                            {movieDetailSetting === false ? "0.0" : seenedMoviesArray.length === 0 ? "0.0" : (moviesRating / seenedMoviesArray?.length).toFixed(1)}
                        </span>

                    </div>

                    <div> <span><i style={{ color: 'yellow' }} class="uis uis-star"></i> {movieDetailSetting === false ? "0.0" : seenedMoviesArray.length === 0 ? "0.0" : ((starRating / seenedMoviesArray?.length).toFixed(1))}</span></div>

                    <div className="flex items-center space-x-2">
                        <ClockIcon className="text-white w-5 h-5" />
                        <span className="text-white">{movieDetailSetting === false ? "0.0" : seenedMoviesArray.length === 0 ? "0.0" : (movieTime / seenedMoviesArray.length)?.toFixed(1)} min     </span>
                    </div>
                </div>



                {/* watched movies ... */}
                {seenedMoviesArray?.map((seenSingleMovie, index) => (

                    <div className='mt-2 pb-1' key={index} style={{ position: "relative", top: "20px" }}>

                        <p onClick={() => removeWatchedMovie(index)}
                            style={{
                                position: "absolute",
                                top: "0px",
                                right: "0px",
                                color: "red",
                                marginBottom: "10px",
                                cursor: "pointer"
                            }}
                        >
                            x
                        </p>
                        <div style={{ display: "flex" }}>
                            <img width={"40px"} src={seenSingleMovie?.Poster} alt='' />
                            <div className='mx-4 text-white'>
                                <h1>{seenSingleMovie?.Title}</h1>
                                <p key={index}>{seenSingleMovie?.imdbRating}&nbsp;&nbsp;&nbsp;{seenSingleMovie.userRating}&nbsp;&nbsp;&nbsp;{seenSingleMovie?.Runtime}</p>
                            </div>
                        </div>
                    </div>

                ))}

            </section>}
        </>
    )
}
