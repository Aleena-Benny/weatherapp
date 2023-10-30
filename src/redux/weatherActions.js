import axios from 'axios';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchWeatherData = (location) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=1cd695627bf4ee479b1f47dfa7ea8971&q=${location}`)
      .then((response) => {
        const weatherData = response.data; // Adjust the data structure as per the API response
        dispatch(fetchWeatherSuccess(weatherData));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
