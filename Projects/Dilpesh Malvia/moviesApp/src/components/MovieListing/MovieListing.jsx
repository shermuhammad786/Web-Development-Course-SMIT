import "./movieListing.scss"
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/Movies/movieSlice";
import MovieCards from "../MovieCards/MovieCards";
import Slider from "react-slick";
import { Settings } from "../../common/Settings";
export default function MovieListing() {
  const allMovies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  console.log(allMovies, "==>>> all moveis")
  console.log(shows, "====>>> all shows")
  let renderMovies, renderShows = ""

  renderMovies =
    allMovies?.Response === "True" ? (
      allMovies?.Search?.map((movie, index) => (
        <MovieCards key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error" >
        <h3>{allMovies.error}</h3 >
      </div >

    )

  renderShows =
    shows?.Response === "True" ? (
      shows?.Search?.map((movie, index) => (
        <MovieCards key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error" >
        <h3>{shows.error}</h3 >
      </div >

    )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movie</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}
