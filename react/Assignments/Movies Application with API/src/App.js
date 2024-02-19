import './App.css';
import LightSide from './Component/LeftSide/LeftSide';
import Header from './Component/Header/Header';
import RightSide from './Component/Right-Side/RightSide';
import { useEffect, useState } from 'react';


function App() {
  const [movies, setMovies] = useState("")
  const [data, setData] = useState([]);
  const [singleMovieID, setSingleMovieID] = useState("")
  const [clickedMovieApi, setClickedMovieApi] = useState("tt0816692");




  // fetching Api to Seach movies
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (movies.trim() === "") {
          return;
        }
        const response = await fetch(`http://www.omdbapi.com/?s=${movies}=&apikey=1662cfd4`);
        // http://img.omdbapi.com/?apikey=[1662cfd4]&
        //  https://www.omdbapi.com/?apikey=1662cfd4&i=tt0816692
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [movies]);





  useEffect(() => {
    const fetchingClickedMovie = async () => {
      try {
        if(clickedMovieApi.trim() === ""){
          return
        }
        const res = await fetch(`https://www.omdbapi.com/?apikey=1662cfd4&i=${clickedMovieApi}`);
        const data = await res.json();
        setClickedMovieApi(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchingClickedMovie()
  } , [clickedMovieApi])

  return (
    <div className="App h-screen ">

      <div className="bg-[#1a1a2e] h-screen flex flex-col items-center ">

        <Header setMovies={setMovies} movies={movies} setData={setData} />

        <main className="flex justify-between w-full max-w-4xl h-5/6 mt-8 px-5 py-4 mt-2">

          <LightSide movies={movies} data={data} setSingleMovieID={setSingleMovieID} />

          <RightSide singleMovieID={singleMovieID} clickedMovieApi={clickedMovieApi} />

        </main>
      </div>
    </div>
  );
}
export default App;
