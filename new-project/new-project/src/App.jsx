import { useRef, useState } from "react";

function App() {
  const [city,setcity] = useState('');
  const [latitude,setlatitude] = useState(0);
  const [longitude,setlongitude] = useState(0);
  const [teperature,settemperature] = useState(0);
  const [sunrise ,setsunrise] = useState(0);
  const [sunset ,setsunset] = useState(0);
  const [error ,seterror] = useState();

  const cityvalidation = useRef(null);

  const getData = async () => {
    // const cityval = cityvalidation.current.value;
    // if(cityval == ''){
    //   seterror("Please enter a city name!");
    // }else{
    //   seterror();
    // }
    if(city ==''){
      alert("Please enter a valid cityname!")
    }
    const res = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=${city}');
    console.log(res);
    const geoData = await res.json();  
    console.log(geoData);
    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;
    setlatitude(geoData.results[0].latitude);
    setlongitude(geoData.results[0].longitude);
    console.log("Longitude: "+latitude+"Latitude: "+longitude);

    const weatherres = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weather_code');
    const weatherdata = await weatherres.json();
    console.log(weatherdata.current_weather.temperature);
    settemperature(weatherdata.current_weather.temperature);

    const sunRes = await fetch(
   'https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset&timezone=auto');
    const sunJson = await sunRes.json();
    console.log(sunJson.daily.sunrise);  // array of sunrise times
    console.log(sunJson.daily.sunset);   // array of sunset times

  // you can pick sunJson.daily.sunrise[0] or a specific index
  setsunrise(sunJson.daily.sunrise[0].split("T")[1]);
  setsunset(sunJson.daily.sunset[0].split("T")[1]);
    
  };

  return (
    <>
      <div className="flex gap-4 flex-col justify-center items-center h-screen">
        <div>
        <h1 className="font-bold text-3xl">Get weather reports</h1>
        </div>
        <div className="flex gap-4">
        <input className="border-2 border-blue-400 p-2 rounded-lg" placeholder="Enter Cityname" ref={cityvalidation} type="text" onChange={(e)=>{
          setcity(e.target.value)}
          }/>
      <button className="p-2 rounded-2xl bg-blue-100 text-blue-500" onClick={getData}>Getdata</button>
        </div>
        <div>
          <span className="text-red-600">{error}</span>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
          <p >Latitude: {latitude}</p>
          <p >Longitude: {longitude}</p>
          <p >Temperature: {teperature}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-80 h-80 rounded-full justify-center flex items-center bg-amber-100">

            <p className=" text-center">Sunrise: {sunrise}</p>
            </div>
            <div className="w-80 h-80 rounded-full justify-center flex items-center bg-amber-100">
            <p className=" text-center">Sunset: {sunset}</p>
            </div>
          </div>
        </div>
      </div>


      {/* new weather report -> show weather and in c or farenheit , use tick box for windspeed */}
<div className="flex justify-center items-center ">
  <div className="flex flex-col justify-center w-1/2">
    <div>
      <p>weather app</p>
    </div>
    <div>
      <input
        className="border-2 border-blue-400 p-2 rounded-lg"
        placeholder="Enter Cityname"
        ref={cityvalidation}
        type="text"
        onChange={(e) => setcity(e.target.value)}
      />
      <select id="Temperature" name="selectTemp">
        <option value="Celcius(°C)">Celsius(°C)</option>
        <option value="Farenheit(F)">Fahrenheit(F)</option>
      </select>
      <input type="checkbox" name="show windspeed" /> show windspeed
    </div>
    <div>
      <button
        className="p-2 rounded-2xl bg-blue-100 text-blue-500"
        onClick={getData}
      >
        Get Weather
      </button>
      <p>Weather in {city}</p>
      <p>Temperature: {teperature}</p>
    </div>
  </div>
</div>
    </>
  )
}

export default App