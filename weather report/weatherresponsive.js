async function getData() {
    const city = document.getElementById('cityInput');
    const cityname = city.value;

    // Use backticks and quotes for the fetch URL
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityname}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
        alert("City not found!");
        return;
    }

    const country = geoData.results[0].country;
    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;

    const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const temperature = weatherData.current_weather.temperature;
    const time = weatherData.current_weather.time;
    const temperatureUnit = weatherData.current_weather_units.temperature;

    console.log({ temperature, time, temperatureUnit });

    document.getElementById('city-name-para').textContent = cityname;
    document.getElementById('latitude').textContent = latitude;
    document.getElementById('temperature').textContent = `${temperature}°${temperatureUnit}`;
}
