import { Link } from "react-router-dom";
import "./header.scss"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAsyncMovies, fetchingAsyncShows, searchedMovieOrShow, searchedShow } from "../../features/Movies/movieSlice";


export default function Header() {
  const dispatch = useDispatch();

  const [term, setTerm] = useState("")
  // dispatch(searchedMovieOrShow(term))
  const data = useSelector(state => state.movies.inputMovie);
  const searchShows = useSelector(state => state.movies.inputShow);
  // console.log(data, "serached data , header")
  // console.log(searchShows , "search show , header")

  const submitHandler = (e) => {
    e.preventDefault()
    // const { payload } = loadings()
    dispatch(searchedMovieOrShow(term))
    dispatch(searchedShow(term))
    // console.log(data, "searched data in funcrion")
    dispatch(fetchingAsyncMovies(data))
    dispatch(fetchingAsyncShows(searchShows))
    setTerm("")
  }
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
          <button><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src="/assets/userImgae.png" alt="user" />
      </div>
    </div>
  )
}
