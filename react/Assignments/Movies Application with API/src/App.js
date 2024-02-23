import './App.css';
import LightSide from './Component/LeftSide/LeftSide';
import Header from './Component/Header/Header';
import RightSide from './Component/Right-Side/RightSide';
import { useEffect, useState } from 'react';



function App() {
  const [movies, setMovies] = useState("")
  const [data, setData] = useState([]);
  const [singleMovieID, setSingleMovieID] = useState("")
  const [watchedMovies, setWatchedMovies] = useState(false)
  const [stateStar, setStateStar] = useState(0);
  const [searchedItems, setSearchedItems] = useState(0);
  const [checkRatedMovie, setCheckRatedMovie] = useState([])
  const [ratedMovie, setRatedMovie] = useState(false)
  const [mouseStars, setMouseStars] = useState(stateStar)
  const [clickedStar, setClickedStar] = useState(false)
  const [loader, setLoader] = useState(false);
  const [loaderD, setLoaderD] = useState(false);



  // fetching Api to Seach movies
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (movies.trim() === "") {
          return;
        } console.log("loader start")
        setLoader(true)
        const response = await fetch(`http://www.omdbapi.com/?s=${movies}=&apikey=1662cfd4`);
        // http://img.omdbapi.com/?apikey=[1662cfd4]&
        //  https://www.omdbapi.com/?apikey=1662cfd4&i=tt0816692
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        if (response.ok) {
          const data = await response.json();

          setData(data);
          console.log("loader closed...")
          setLoader(() => data.Response ? false : true)
          // setLoader(() => data.Response === "False" ? "No Such Data" : true)
          console.log(data)

        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoader(false)
      }
    };

    fetchData();
  }, [movies]);


  return (
    <div className="App h-screen ">

      <div className="bg-[#1a1a2e] h-screen flex flex-col items-center ">

        <Header setMovies={setMovies} searchedItems={searchedItems} />

        <main className="flex justify-between w-full max-w-4xl h-5/6 mt-8 px-5 py-4 mt-2">

          <LightSide
            stateStar={stateStar}
            setStateStar={setStateStar}
            watchedMovies={watchedMovies} setWatchedMovies={setWatchedMovies}
            data={data}
            setSingleMovieID={setSingleMovieID}
            setSearchedItems={setSearchedItems}
            checkRatedMovie={checkRatedMovie}
            setRatedMovie={setRatedMovie}
            setMouseStars={setMouseStars}
            clickedStar={clickedStar}
            setClickedStar={setClickedStar}
            loader={loader}
            setLoader={setLoader}
            setLoaderD={setLoaderD}

          />

          <RightSide
            stateStar={stateStar}
            setStateStar={setStateStar}
            watchedMovies={watchedMovies}
            singleMovieID={singleMovieID}
            setWatchedMovies={setWatchedMovies}
            setCheckRatedMovie={setCheckRatedMovie}
            ratedMovie={ratedMovie}
            setRatedMovie={setRatedMovie}
            checkRatedMovie={checkRatedMovie}
            mouseStars={mouseStars}
            setMouseStars={setMouseStars}
            clickedStar={clickedStar}
            setClickedStar={setClickedStar}
            loaderD={loaderD}
            setLoaderD={setLoaderD}

          />


        </main>
      </div>
    </div>
  );
}
export default App;