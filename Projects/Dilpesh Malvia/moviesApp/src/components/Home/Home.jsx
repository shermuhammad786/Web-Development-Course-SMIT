import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import MovieApi from "../../common/apis/MovieApi";
// import { APIkey } from "../../common/apis/ApiKey";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAsyncMovies, fetchingAsyncShows, } from "../../features/Movies/movieSlice";
// import { addMovies } from "../../features/Movies/movieSlice";
export default function Home() {
  // const movieText = "Harry";
  const dispatch = useDispatch()
  // const data = useSelector(getSearchedData);
  const data = useSelector(state => state.movies.inputMovie);
  const searchShows = useSelector(state => state.movies.inputShow);
  useEffect(() => {
    // const fetchMovie = async () => {
    //   const response = await MovieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    //   // const data = response.json();
    //   console.log(response, "===>>> response")
    //   dispatch(addMovies(response.data))
    //   console.log(addMovies(), "==>>> addmovies")
    // }
    // fetchMovie();
    // console.log(data, "serached data , home")
    // const movieText = "Harry";
    // const showText = "Friends";
    dispatch(fetchingAsyncMovies(data));
    dispatch(fetchingAsyncShows(searchShows));
  }, [dispatch, data, searchShows])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}
