import { WbSunny } from "@mui/icons-material";
import React from "react";

const TagWeather = ({ data }) => {
    return (
        <div className="bg-[#428b91] py-[20px] px-[16px] rounded-[5px]">
            <div className="flex ">
                <WbSunny className="flex-1" />
                <div className="flex-1">
                    <p className="text-[30px] font-bold">{data.temp}☼ C</p>
                    <p>Nhiều mây về đêm</p>
                </div>
            </div>
            <div className="mt-[20px] py-[8px] bg-[#cccccc52] rounded-[5px]">
                <div className="flex justify-between px-[40px]">
                    <p>Độ ẩm</p>
                    <p>{data.doam}</p>
                </div>
                <div className="flex justify-between px-[40px]">
                    <p>Tốc độ gió</p>
                    <p>{data.doam}</p>
                </div>
            </div>
        </div>
    );
};

export default TagWeather;
