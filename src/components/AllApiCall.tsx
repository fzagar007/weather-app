import { useState, ChangeEvent } from 'react';
import { CURRENT_WEATHER_API, CURRENT_WEATHER_URL, LON_LAT_URL, lonLatOptions, FIVE_DAYS_API, FIVE_DAYS_URL, PLACES_URL, placesOptions } from './api';
import { currentWeatherType, fiveDaysType, optionType, placesType } from './types/types';

const AllApiCall = () => {
  const [term, setTerm] = useState<string>('');
  const [radius, setRadius] = useState<any>("");
  const [currentWeather, setCurrentWeather] = useState<currentWeatherType | null>(null);
  const [fiveDays, setFiveDays] = useState<fiveDaysType | null>(null);
  const [places, setPlaces] = useState<placesType | null>(null);

  const getCurrentWeather = (value: string) => {
    fetch(
      `${CURRENT_WEATHER_URL}${value.trim()}&units=metric&appid=${CURRENT_WEATHER_API}`
    )
      .then((response) => response.json())
      .then((data) => setCurrentWeather(data));
  };

  const getLatLong = (value: string) => {
    fetch(
      `${LON_LAT_URL}${value.trim()}`, lonLatOptions)
      .then((response) => response.json())
      .then((data) => LatiLong(data[0]));
  };

  const LatiLong = (data: optionType) => {
    getFiveDays(data)
    getPlaces(data)
  };

  const getFiveDays = (data: optionType) => {
    fetch(
      `${FIVE_DAYS_URL}${data.lat}&lon=${data.lon}&units=metric&appid=${FIVE_DAYS_API}`)
      .then((response) => response.json())
      .then((data) => {
        const a1 = {
          list: data.list.slice(8, 33)
        }
        setFiveDays(a1)
      })
  };
  let r = 0;
  if (isNaN(radius) || radius === "") {
    r = 500;
  }
  else {
    r = radius;
  }
  const getPlaces = (data: optionType) => {
    fetch(
      `${PLACES_URL}${r}&lon=${data.lon}&lat=${data.lat}`, placesOptions)
      .then((response) => response.json())
      .then((data) => setPlaces(data));
      
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTerm(value)
  };
  const RadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setRadius(value)
  };
  var width = window.innerWidth;
  var height = window.innerHeight;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    getCurrentWeather(term);
    getLatLong(term);
    document.body.style.backgroundImage = "url('https://source.unsplash.com/" + width + "x" + height + "/?" + term + "')";
  };
  
  
  return (
    {
      currentWeather,
      fiveDays,
      places,
      term,
      radius,
      onInputChange,
      RadiusChange,
      handleClick,
    }
  );
}

export default AllApiCall;