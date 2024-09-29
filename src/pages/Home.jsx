import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherRequest } from "../actions/weatherAction";
import TagWeather from "../components/TagWeather";

const Home = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState("VietNam");
    const [load, setLoad] = useState(false);
    const { weather, loading, error } = useSelector((state) => state.weather);

    const handleDispatchWeather = () => {};

    const handleKeyDownSearch = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleDispatchWeather();
        }
    };
    useEffect(() => {
        dispatch(fetchWeatherRequest(city));
    }, [load]);
    console.log(weather);
    console.log(loading);
    console.log(error);
    const [data, setData] = useState({
        time: "5:12",
        weather: "cloud",
        temp: "20.02",
        doam: "64",
        speedWind: "20",
    });

    return (
        <div className="bg-gradient-to-bl from-[#7dcbe4] to-[#c9d3d0] h-[100vh] text-white">
            <div className="flex justify-center items-center pt-[80px]">
                <div className="flex items-center group">
                    <input
                        type="text"
                        value={city}
                        placeholder="Nhập thành phố muốn xem..."
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={handleKeyDownSearch}
                        className={`transition-all duration-500 w-[30vw] py-[12px]  px-[14px] bg-[#000] border-[1px] rounded-[8px] focus:scale-125 focus:outline-0
                        }`}
                    />

                    <div className="transition-all duration-500 py-[12px] px-[14px] font-semibold border-[1px] bg-[#6e53458f] border-[#be5757bf] border-[#000] rounded-[8px] cursor-pointer group-focus-within:scale-125 group-focus-within:ml-[100px] hover:bg-gradient-to-r from-[#ff9797] to-[#ea5f5feb] hover:text-[#000]">
                        Tìm kiếm
                    </div>
                </div>
            </div>

            <div className="bg-[#ffffff14] px-[40px] py-[14px] mt-[100px] grid grid-cols-3 gap-[20px]">
                <TagWeather data={data} />
                <TagWeather data={data} />
                <TagWeather data={data} />
                <TagWeather data={data} />
                <TagWeather data={data} />
            </div>
        </div>
    );
};

export default Home;
