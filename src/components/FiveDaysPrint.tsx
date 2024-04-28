import { fiveDaysType } from "./types/types";

type Props = {
    data: fiveDaysType,
};

const FiveDaysPrint = ({ data }: Props): JSX.Element => {
    const Weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let a = new Date().getDay();
    const CheckDay = (day: number) => {
        if (day + a > 6) {
            return day + a - 7;
        }
        else {
            return day + a;
        }
    };
    let day1 = Weekday[CheckDay(1)];
    let day2 = Weekday[CheckDay(2)];
    let day3 = Weekday[CheckDay(3)];
    let day4 = Weekday[CheckDay(4)];
    let icon1 = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
    let icon2 = "http://openweathermap.org/img/wn/" + data.list.slice(8)[0].weather[0].icon + ".png";
    let icon3 = "http://openweathermap.org/img/wn/" + data.list.slice(16)[0].weather[0].icon + ".png";
    let icon4 = "http://openweathermap.org/img/wn/" + data.list.slice(24)[0].weather[0].icon + ".png";
    
    return (
        <div className="row">
            <div id="Day1" className="card1">
                <h3 className="day1" id="day1">{day1}</h3>
                <h2 className="temp1">{Math.round(data.list[0].main.temp)}°C</h2>
                <div className="flex1">
                    <img src={icon1} alt="" className="icon1" />
                    <div className="description1">{data.list[0].weather[0].description}</div>
                </div>
                <div className="humidity1">Humidity: {data.list[0].main.humidity}%</div>
                <div className="wind1">Wind speed: {data.list[0].wind.speed}m/s</div>
            </div>

            <div id="Day2" className="card1">
                <h3 className="day2" id="day1">{day2}</h3>
                <h2 className="temp2">{Math.round(data.list.slice(8)[0].main.temp)}°C</h2>
                <div className="flex2">
                    <img src={icon2} alt="" className="icon2" />
                    <div className="description2">{data.list.slice(8)[0].weather[0].description}</div>
                </div>
                <div className="humidity2">Humidity: {data.list.slice(8)[0].main.humidity}%</div>
                <div className="wind2">Wind speed: {data.list.slice(8)[0].wind.speed}m/s</div>
            </div>

            <div id="Day3" className="card1">
                <h3 className="day3" id="day1">{day3}</h3>
                <h2 className="temp3">{Math.round(data.list.slice(16)[0].main.temp)}°C</h2>
                <div className="flex3">
                    <img src={icon3} alt="" className="icon3" />
                    <div className="description3">{data.list.slice(16)[0].weather[0].description}</div>
                </div>
                <div className="humidity3">Humidity: {data.list.slice(16)[0].main.humidity}%</div>
                <div className="wind3">Wind speed: {data.list.slice(16)[0].wind.speed}m/s</div>
            </div>

            <div id="Day4" className="card1">
                <h3 className="day4" id="day4">{day4}</h3>
                <h2 className="temp4">{Math.round(data.list.slice(24)[0].main.temp)}°C</h2>
                <div className="flex4">
                    <img src={icon4} alt="" className="icon4" />
                    <div className="description4">{data.list.slice(24)[0].weather[0].description}</div>
                </div>
                <div className="humidity4">Humidity: {data.list.slice(24)[0].main.humidity}%</div>
                <div className="wind4">Wind speed: {data.list.slice(24)[0].wind.speed}m/s</div>
            </div>
        </div>
    );
}

export default FiveDaysPrint;