import { Link } from "react-router-dom";
import "./header.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchingAsyncMovies, fetchingAsyncShows } from "../../features/Movies/movieSlice";


export default function Header() {

  const [term, setTerm] = useState("")
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault()
    // const { payload } = loadings()
    dispatch(fetchingAsyncMovies(term))
    dispatch(fetchingAsyncShows(term))
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
