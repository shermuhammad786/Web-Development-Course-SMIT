
import React, { useEffect, useState } from 'react'
import { StarIcon } from './Ratings'

export default function ClickedMovieDetail({ singleMovieID, setWatchedMovies, stateStar, setStateStar, setSeenMovies, seenMovies, setSeenMoviesDetail, setSettings, setMovieDetailSetting, ratedMovie, checkRatedMovie, mouseStars, setMouseStars, setRatedMovie, clickedStar, setClickedStar, loaderD, setLoaderD }) {

    const isMovieRated = checkRatedMovie.find(che => che.imdbID === singleMovieID)

    const [getClickedData, setGetClickedData] = useState([])

    useEffect(() => {
        const clickedMovieFun = async () => {

            const fetchClickedMovieAPI = await fetch(`https://www.omdbapi.com/?apikey=1662cfd4&i=${!singleMovieID ? "" : singleMovieID}`);
            const data = await fetchClickedMovieAPI.json()
            setGetClickedData((data))
            setLoaderD(false)
        }
        clickedMovieFun()
    }, [singleMovieID, setLoaderD])


    Array.isArray(getClickedData) && getClickedData?.map(SingleMovie => SingleMovie)
    // console.log(movie, "moviessseeee")

    const starsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const [clickedStar, setClickedStar] = useState(false)
    // const [ratedMovie, setRatedMovie] = useState(false)
    const ratedStars = (starIndex, star) => {
        setMouseStars(star)

    }
    const clicked = (star) => {
        setClickedStar(true)
        setStateStar(star)

    }
    const addToList = (getClickedData) => {
        setSeenMoviesDetail(getClickedData)
        setWatchedMovies(false)
        setSeenMovies(seenMovies + 1)
        setSettings(true)
        setMovieDetailSetting(true)
        setMouseStars(0)
    }

    return (

        <section className="bg-[#0f3460] w-1/2 rounded-lg text-white" style={{ position: "relative" }}>






            <h1 className='text-white text-xl m-4 absolute'>{loaderD === true ? "Loading..." : ""}</h1>


            {!loaderD && <div>
                <p onClick={() => setWatchedMovies(false)} style={{ margin: "10px", position: "absolute", right: "15px", cursor: "pointer", color: "red" }}>x</p>
                <div className='d-flex'>
                    <div className='w-32'>
                        <img width={"100%"} src={getClickedData?.Poster} alt={getClickedData.title} />
                    </div>
                    <div className='d-flex flex-col justify-evenly text-left m-4'>
                        <h1 style={{ fontSize: "23px", fontWeight: "bolder" }}>{getClickedData?.Title}</h1>
                        <p>{getClickedData.Released}  {getClickedData?.Runtime}</p>
                        <p>{getClickedData?.Genre}</p>
                        <p className='d-flex'> {getClickedData.imdbRating}&nbsp;&nbsp; <StarIcon /></p>
                    </div>
                </div>
                <div style={{ height: "250px" }} className='d-flex flex-col justify-around items-center h-80'>
                    {ratedMovie === true ? "Your rated this movie " + isMovieRated?.userRating : (<div style={{ color: "yellow" }} className='d-flex w-50'>
                        {starsArray.map((star, starIndex) => (
                            <p key={starIndex}
                                onClick={() => clicked(star)}
                                onMouseLeave={() => clickedStar === false ? setMouseStars(0) : setMouseStars(stateStar)}
                                onMouseMove={() => ratedStars(starIndex, star)}>{star <= (mouseStars) ? <i class="uis uis-star"></i> : <i class="uil uil-star"></i>}</p>
                        ))}
                        <p> &nbsp; {mouseStars}</p>
                    </div>)}
                    <div className='w-56 h-10 text-center'>{clickedStar && <button className=' bg-[#1a2b40] w-full h-full border  rounded' onClick={() => addToList(getClickedData)}>Add to list</button>} </div>
                    <div><p style={{ fontSize: "13px", width: "300px", }}>{getClickedData?.Plot}</p></div>
                    <div><p style={{ width: "300px" }}>Starings {getClickedData?.Actors}</p></div>
                    <div><p style={{ width: "300px" }}>Directed by {getClickedData?.Writer}</p></div>
                </div>
            </div>
            }







        </section >

    )
}
