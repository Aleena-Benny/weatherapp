import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../redux/weatherActions';

function LandingPage() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    // Fetch weather data when the component mounts
    dispatch(fetchWeatherData(selectedLocation));
  }, [dispatch, selectedLocation]);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Weather App</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="locationSelect">Select Location</label>
            <select
              id="locationSelect"
              className="form-control"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="">Select a location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              {/* Add more locations as needed */}
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          {weatherData.loading ? (
            <p>Loading...</p>
          ) : weatherData.error ? (
            <p>Error: {weatherData.error}</p>
          ) : (
            <div>
              <h3>Weather in {selectedLocation}</h3>
              <p>Temperature: {weatherData.temperature}°C</p>
              <p>Condition: {weatherData.condition}</p>
              {/* Add more weather information fields */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
