import { useEffect, useState } from 'react'
import Forecast from './components/Forecast'
import Header from './components/Header'
import Search from './components/Search'
import TempuratureAndDetail from './components/TempuratureAndDetail'
import TimeAndLocation from './components/TimeAndLocation'
import getFormattedWeatherData from './services/WeatherServices'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const App = () => {

  const [query,setQuery] = useState({q: "dehli"});
  const [units,setUnits] = useState('metric');
  const [weather,setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);


    await getFormattedWeatherData({...query,units}).then((data)=>{
      toast.success(`Fetched weather data for ${data.name},${data.country}`);
      setWeather(data);
    })
    
  }

  useEffect(() => {
    getWeather();
  },[query,units]);

  const formatBackground = () => {
    if(!weather) return "from-cyan-400 to-blue-700";
    const threshold = units === "metric" ? 20 : 60
    if(weather.temp <= threshold) {
      return 'from-cyan-400 to-blue-700'
    }else{
      return "from-yellow-500 to-orange-700";
    }
  };


  return (
    <div className={`${formatBackground()} mx-auto max-w-screen-lg mt-4 mb-4 py-2 px-32 bg-gradient-to-br  shadow-lg shadow-gray-400 rounded-lg`}>
      <Header setQuery={setQuery} />
      <Search setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempuratureAndDetail weather={weather} units={units} />
          <Forecast title="hour forecast" data={weather.fomattedForecastWeather.hourly} />
          <Forecast title="daily forecast" data={weather.fomattedForecastWeather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme='colored' />
    </div>
  )
}

export default App