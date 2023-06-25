import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './WeatherStyle.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        const apiKey = 'f1509a6fea9421c4c05639d26bf8793a'; // Replace with my own API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleReset = () => {
        setCity('');
        setWeatherData(null);
    };

    return (
        <div className="centered-div">
            <div>
                <div>
                    <Typography color ="indianred" variant="h4" gutterBottom>
                        Weather App
                    </Typography>
                </div>
                <div>
                    <TextField
                        label="Enter city"
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
                            Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
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
