import React, { useState } from 'react';
import axios from 'axios';

import windIcon from "./windiamge.png"

import Sunny from "./weatherVideos/sunny.mp4"
import Snow from "./weatherVideos/snow.mp4"
import Rain from "./weatherVideos/rain.mp4"
import Clouds from "./weatherVideos/clouds.mp4"
import Mist from "./weatherVideos/Mist.mp4"
import Partly from "./weatherVideos/PratlyClouds.mp4"
import LightRain from "./weatherVideos/LightRain.mp4"
import Fog from "./weatherVideos/Fog.mp4"
import byDfault from "./weatherVideos/default.mp4"
import lightDrizzle from "./weatherVideos/Lightdrizzle.mp4"




const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=481b4625ad7549b8b84145328241002&q=${city}&aqi=yes`;

            const response = await axios.get(apiUrl);
            console.log(response, "==>>> data")
            setWeather(response.data);

        } catch (error) {
            console.error('Error fetching weather data:', error);
        } finally {
            setLoading(false);
        }
    };

    const displayVideos = weather?.current?.condition?.text;



    return (
        <div className='container'>

            <video src={
                displayVideos === "Sunny" ? Sunny
                    : displayVideos === "Patchy rain nearby" ? Rain
                        : displayVideos === "Overcast" ? Clouds
                            : displayVideos === "Cloudy " ? Clouds
                                : displayVideos === "Clear" ? Sunny
                                    : displayVideos === "Light rain shower" ? LightRain
                                        : displayVideos === "Mist" ? Mist
                                            : displayVideos === "Fog" ? Fog
                                                : displayVideos === "Heavy snow" ? Snow
                                                    : displayVideos === "Partly Cloudy " ? Partly
                                                        : displayVideos === "Partly cloudy" ? Partly
                                                            : displayVideos === "Partly Cloudy" ? Partly
                                                                : displayVideos === "Light drizzle" ? lightDrizzle
                                                                    : displayVideos === "Moderate rain at times" ? Rain
                                                                        : byDfault
            } autoPlay loop muted></video>


            <div className='mainCard'>
                <div className={"card"}>
                    <div className='header'>
                        <h1 className='weatherApp'>Weather App</h1>
                        <input
                            type="text"
                            placeholder="Enter City Name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button onClick={fetchWeather} disabled={loading}>
                            {loading ? 'Loading...' : 'Get Weather'}
                        </button>
                    </div>
                    {weather && (
                        <div className='details'>
                            <h2>{weather.location.name}, {weather.location.country}</h2>
                            <p>{weather.current.condition.text}</p>
                            <p>Temperature: {weather.current.temp_c} °C</p>
                            <img width={"100px"} src={weather.current.condition.icon} alt="" />
                            <p><img src={windIcon} width={"50px"} alt="slfdg" /> mph {weather.current.wind_mph}</p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default WeatherApp;
