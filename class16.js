// function getData() {
//     fetch("https://geocoding-api.open-meteo.com/v1/search?name=mohali")
//     .then((res) => res.json())
//     .then((data) => {
//         const info = data.results[0];
//         console.log(info.latitude);
//         console.log(info.longitude);
//         console.log(info.country);
//         console.log(info.admin1);
//     });
// }
// // 
async function getData() {
    const cityinput = document.getElementById('city-name');
    const cityname = cityinput.value;
    const para = document.getElementById('para');

    const geoRes = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=${cityname}');
    console.log("Response",geoRes);
    const geoData = await geoRes.json();
    console.log(geoData);
    const info = geoData.results[0];

    para.innerHTML = `
        <strong>Longitude:</strong> ${info.longitude} <br>
        <strong>Latitude:</strong> ${info.latitude} <br>
        <strong>Country:</strong> ${info.country} <br>
    `;    
}