import { currentWeatherType } from "./types/types";
type Props = {
    data: currentWeatherType
};

const CurrentWeatherPrint = ({ data }: Props) => {
    data.a = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

    return (
        <div className="weather loading">
            <h2 className="city">Weather in {data.name} </h2>
            <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
            <div className="flex">
                <img src={data.a} alt="" className="icon" />
                <div className="description">{data.weather[0].description}</div>
            </div>
            <div className="humidity">Humidity: {data.main.humidity}%</div>
            <div className="wind">Wind speed: {data.wind.speed}m/s</div>
        </div>
    );
}

export default CurrentWeatherPrint;