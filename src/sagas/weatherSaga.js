import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchWeatherFailue, fetchWeatherSuccess } from "../actions/weatherAction";

const getWeatherApi = async (city) =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dabb22e62aa2bd239b1022b511d0c8e`);

function* getWeather(action) {
    try {
        const weather = yield call(getWeatherApi, action.payload);
        yield put(fetchWeatherSuccess(weather.data));
    } catch (error) {
        yield put(fetchWeatherFailue(error.message));
    }
}

export default function* weatherSaga() {
    yield takeEvery("FETCH_WEATHER_REQUEST", getWeather);
}
