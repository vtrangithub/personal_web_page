import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './WeatherStyle.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        if (!city.trim()) {
            alert('Please enter a city');
            return;
        }

        const apiKey = 'f1509a6fea9421c4c05639d26bf8793a';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                alert("No city found! Please check the city name");
                setWeatherData(null);
                return;
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleReset = () => {
        setCity('');
        setWeatherData(null);
    };

    const convertKelvinToFahrenheit = (kelvin) => {
        return (kelvin - 273.15) * 9 / 5 + 32;
    };

    return (
        <div className="centered-div">
            <div>
                <div className='rainbow-title'>
                    <Typography variant="h3">
                        Weather App
                    </Typography>
                </div>
                <div>
                    <TextField
                        label="Enter your city"
                        value={city}
                        onChange={handleCityChange}
                        variant="outlined"
                        margin="normal"
                    />
                </div>
                <div>
                    <Button variant="contained" onClick={fetchWeather}>
                        Check Weather
                    </Button>
                </div>
                <br />
                <div>
                    <Button variant="contained" onClick={handleReset}>
                        Reset
                    </Button>
                </div>
            </div>

            <div>
                {weatherData && (
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Weather in {weatherData.name}, {weatherData.sys.country}
                        </Typography>
                        <Typography variant="body1">
                            Temperature: {Math.round(convertKelvinToFahrenheit(weatherData.main.temp))}°F ({Math.round(weatherData.main.temp - 273.15)}°C)
                        </Typography>
                        <Typography variant="body1">
                            Humidity: {weatherData.main.humidity}%
                        </Typography>
                        <Typography variant="body1">
                            Description: {weatherData.weather[0].description}
                        </Typography>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
