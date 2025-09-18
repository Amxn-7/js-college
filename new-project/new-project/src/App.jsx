import { useState } from "react";

function App() {
  const [city,setcity] = useState('');
  const [latitude,setlatitude] = useState(0);
  const [longitude,setlongitude] = useState(0);
  const [teperature,settemperature] = useState(0);
  const [sunrise ,setsunrise] = useState(0);
  const [sunset ,setsunset] = useState(0);
  const getData = async () => {
    if(city ==''){
      alert("Please enter a valid cityname!")
    }
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    console.log(res);
    const geoData = await res.json();  
    console.log(geoData);
    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;
    setlatitude(geoData.results[0].latitude);
    setlongitude(geoData.results[0].longitude);
    console.log("Longitude: "+latitude+"Latitude: "+longitude);

    const weatherres = await fetch(
     ` https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weather_code
    `);
    const weatherdata = await weatherres.json();
    console.log(weatherdata.current_weather.temperature);
    settemperature(weatherdata.current_weather.temperature);

    const sunRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset&timezone=auto
  `);
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
        <input className="border" placeholder="Enter Cityname" type="text" onChange={(e)=>{
          setcity(e.target.value)}
          }/>
      <button className="bg-gray-300 border p-2" onClick={getData}>getdata</button>
        </div>
        <div>
          <p >Latitude: {latitude}</p>
          <p >Longitude: {longitude}</p>
          <p >Temperature: {teperature}</p>
          <p >Sunrise: {sunrise}</p>
          <p >Sunset: {sunset}</p>
        </div>
      </div>
    </>
  )
}

export default App