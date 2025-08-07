// async function getData() {
//     const city = document.getElementById('cityInput');
//     const cityname = city.value;
//     const geoRes = await fetch(https://geocoding-api.open-meteo.com/v1/search?name=${cityname});

//     const geoData = await geoRes.json();  
    
//     const country = geoData.results[0].country;
//     const latitude = geoData.results[0].latitude;
//     const longitude = geoData.results[0].longitude;
    
//     const weatherRes = await fetch(
//     https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true);

//     const waetherData = await weatherRes.json();
//     console.log(waetherData);

//     const temperature = waetherData.current_weather.temperature;
//     const time = waetherData.current_weather.time;
//     const temperatureUnit = waetherData.current_weather_units.temperature;

//     console.log(temperature);
//     console.log(time);
//     console.log(temperatureUnit);

//     document.getElementById('city-name-para').textContent = cityname;  
//     document.getElementById('latitude').textContent = latitude;  
//     document.getElementById('temprature').textContent = temperature+'°C';  
    
    
// }