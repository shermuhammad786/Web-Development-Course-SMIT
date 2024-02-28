import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Card = styled(animated.div)`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &.warm {
    background-image: url('path/to/summer-image.jpg'); // Replace with your summer image path
    color: #fff; // Adjust text color for better visibility on the light background
  }

  &.cold {
    background-image: url('path/to/winter-image.jpg'); // Replace with your winter image path
    color: #000; // Adjust text color for better visibility on the dark background
  }
`;


const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            // const apiKey = '3b9db5aa9a4eaff3abec372354ce8d96'; // Replace with your API key
            // const apiUrl = `https://api.weatherapi.com/v1/current.json?key=481b4625ad7549b8b84145328241002&q=${city}&aqi=yes`;
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3b9db5aa9a4eaff3abec372354ce8d96}"

            const response = await axios.get(apiUrl);
            setWeather(response.data);
            console.log(weather, "weather details ===>>>.")
        } catch (error) {
            console.error('Error fetching weather data:', error);
        } finally {
            setLoading(false);
        }
    };

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
    });


    // const weatherCondition = weather && weather.weather[0].main.toLowerCase();
    // const isWarmWeather = weatherCondition === 'clear' || weatherCondition === 'clouds';

    return (
        <Container>
            <Card style={fadeIn}>
                <h2>Weather App</h2>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeather} disabled={loading}>
                    {loading ? 'Loading...' : 'Get Weather'}
                </button>
                {weather && (
                    <div>
                        <h3>{weather.location.name}, {weather.location.country}</h3>
                        <p>{weather.current.condition.text}</p>
                        <p>Temperature: {weather.current.temp_c} °C</p>
                        <img src={weather.current.condition.icon} alt="" />
                    </div>
                )}
            </Card>
        </Container>
    );
};

export default WeatherApp;
