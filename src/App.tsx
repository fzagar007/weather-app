import './App.css';
import Search from './components/Search';
import AllApiCall from './components/AllApiCall';
import CurrentWeatherPrint from './components/CurrentWeatherPrint';
import FiveDaysPrint from './components/FiveDaysPrint';
import PlacesPrint from './components/PlacesPrint';

const App = (): JSX.Element => {
  const { currentWeather, term, onInputChange, handleClick, fiveDays, places, radius, RadiusChange } = AllApiCall();

  return (
    <section>
      <div className="center">
        <div className='card'>
          <Search
            term={term}
            radius={radius}
            onInputChange={onInputChange}
            RadiusChange={RadiusChange}
            handleClick={handleClick} />
          {currentWeather ? (
            <CurrentWeatherPrint data={currentWeather} />) : ("")}
        </div>
      </div>
      {fiveDays ? (
        <FiveDaysPrint data={fiveDays} />) : ("")}
      {places ? (
        <PlacesPrint data={places} />) : ("")}
    </section>
  );
}

export default App;
