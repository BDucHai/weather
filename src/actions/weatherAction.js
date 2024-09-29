export const fetchWeatherRequest = (city) => ({ type: "FETCH_WEATHER_REQUEST", payload: city });

export const fetchWeatherSuccess = (weather) => ({ type: "FETCH_WEATHER_SUCCESS", payload: weather });

export const fetchWeatherFailue = (error) => ({ type: "FETCH_WEATHER_FAILURE", payload: error });
