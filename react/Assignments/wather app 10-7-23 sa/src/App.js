// import { useEffect, useState } from "react";
import WeatherApp from "./Components/Weather";

function App() {
  // const [logo, setLogo] = useState("")


  // useEffect(() => {
  //   const weatherAPIFetchHandler = async () => {
  //     try {
  //       const weatherAPIFetch = await fetch("https://api.weatherapi.com/v1/current.json?key=481b4625ad7549b8b84145328241002&q=London&aqi=yes");
  //       const data = await weatherAPIFetch.json();
  //       console.log(data.current.condition.icon, "===>>> data");
  //       setLogo(data.current.condition.icon)
  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   };

  //   weatherAPIFetchHandler();
  // }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <>
    <WeatherApp />
    </>
  );
}

export default App;
