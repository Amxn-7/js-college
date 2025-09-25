import { useRef, useState } from 'react'

function App() {
  const cityname = useRef(null);
  const [city,setcities] = useState([]);
  const [latitude,setlatitude] = useState(0);
  const [longitude,setlongitude] = useState(0);
  const [temperature,settemperature] = useState(null); 
  const [windspeed,setwindspeed] = useState(null);    
  const [showWind, setShowWind] = useState(false);
  const [unit, setUnit] = useState("celsius");     

  const formatTemperature = (tempc) => {
    if (unit === "fahrenheit") {
      return ((tempc * 9) / 5 + 32).toFixed(1) + "°F";
    }
    return tempc + "°C";
  };

  const getData = async () => {
    const city = cityname.current.value;
    if(city === ""){
      alert("Enter a city name!");
      return;
    }
    const geoRes = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=${city}');
    const geoData = await geoRes.json();

    if (!geoData.results) {
      alert("Please select a valid city");
      return;
    }

    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;
    setlatitude(latitude);
    setlongitude(longitude);
    setcities(geoData.results);

    const weatherres = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true');
    const weatherdata = await weatherres.json();

    settemperature(weatherdata.current_weather.temperature);
    setwindspeed(weatherdata.current_weather.windspeed);
  };
  const getweatherdata = async()=>{
    const weatherres = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true');
    const weatherdata = await weatherres.json();
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-8 bg-gray-200 rounded-2xl w-1/2 flex flex-col'>
        <p className='font-bold'>Weather App</p>
        <div className='flex gap-2'>
          <input className='border border-gray-500 rounded-lg px-2' type="text" ref={cityname}/>
          <select 
            id="Temperature" 
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            name="selectTemp"
          >
            <option value="celsius">Celsius(°C)</option>
            <option value="fahrenheit">Fahrenheit(°F)</option>
          </select>
          <label>
            <input 
              type="checkbox" 
              checked={showWind} 
              onChange={(e) => setShowWind(e.target.checked)} 
            /> show windspeed
          </label>
        </div>
        <div className='m-2'>
          <button 
            className='bg-blue-600 rounded-xl p-1 px-2 text-white font-bold' 
            onClick={getData}
          >
            Get weather
          </button>
        </div>

        {city.length > 0 && <p className='m-4 font-bold'>Please select a city</p>}

        <div className='max-h-100 overflow-scroll overflow-x-hidden'>
          {city.map((city) => (
            <div key={city.id || city.name} className='py-1 px-4'>
              <p className='bg-gray-50 rounded-xl p-4'>
                {city.name}-{city.admin1}
              </p>
            </div>
          ))}
        </div>

        {/* results */}
        <div>
          {temperature !== null && (
            <div>
              {temperature!='' && (<p>Temperature: {formatTemperature(temperature)}</p>)}
              {showWind && <p>Windspeed: {windspeed} km/h</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App