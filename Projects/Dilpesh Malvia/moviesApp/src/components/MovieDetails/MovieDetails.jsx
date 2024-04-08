import "./movieDetails.scss"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchingAsyncMovieAndShowDetail, getMovieOrShowDetail, removeSelectedMovie } from "../../features/Movies/movieSlice"
import { useEffect } from "react"
export default function MovieDetails() {
  console.log(useParams(), "==>>> use search params")
  const { imdbID } = useParams()
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrShowDetail);
  useEffect(() => {
    dispatch(fetchingAsyncMovieAndShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie())
    }
  }, [dispatch, imdbID])
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"> : {data.imdbRating}</i>
              </span>
              <span>
                IMDB Viotes <i className="fa fa-thumbs-up"> : {data.imdbVotes}</i>
              </span>
              <span>
                Runtime <i className="fa fa-film"> : {data.Runtime}</i>
              </span>
              <span>
                year <i className="fa fa-calendar"> : {data.Year}</i>
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  )
}
