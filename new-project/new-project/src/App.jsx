function App() {
  const getData = async () => {
    const res = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=london");
    console.log(res);
    const geoData = await res.json();  
    console.log(geoData);
    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;
    console.log("Longitude: "+latitude+"Latitude: "+longitude);
    
    
  };

  return (
    <>
      {/* <div className="bg-blue-50 min-h-screen flex">

        <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-6 justify-between">
          <div>
            <h2 className="text-xl font-bold text-blue-600">WI-API</h2>
            <nav className="flex flex-col gap-4 text-gray-700 mt-6">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">Settings</a>
              <a href="#" className="hover:text-blue-600">Search</a>
            </nav>
          </div>
          <div>
            <img src="https://via.placeholder.com/100" alt="profile-img" className="rounded-full"/>
          </div>
        </aside>

        <main className="flex-1 flex items-center justify-center p-10">
          <div className="bg-white w-full max-w-2xl p-10 rounded-xl shadow-md text-center">
            <p className="text-gray-500 text-2xl mb-8">
              Hello, <span className="font-semibold text-black">Ready to<br/>Know the weather of your City?</span>
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <input id="cityInput" className="border border-blue-600 rounded-md px-4 py-2 text-lg w-2/3" type="text" placeholder="Enter city name" />
              <button id="getWeatherBtn" onClick={getData} className="bg-black text-white px-4 py-2 rounded-md font-semibold">Get Weather</button>
            </div>

            <div id="weatherResult" className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
              <div className="text-left">
                <div className="flex flex-row items-center">
                  <p id="city-name-para" className="font-semibold text-sm text-gray-700">City Name, </p>
                  <p id="country-name-para" className="font-semibold">country Name</p>
                </div>
                <p id="latitude" className="text-sm text-gray-500">00:00 GMT+5</p>
              </div>
              <div className="flex items-center gap-4">
                <p id="temprature" className="text-2xl font-bold">25°C</p>
                <img id="weatherIcon" src="https://i.pinimg.com/736x/7c/44/de/7c44de4d01345d182d239f4ea037f471.jpg" alt="Weather Icon" className="w-10 h-10 object-cover" />
              </div>
            </div>
          </div>
        </main>
      </div> */}
      <button className="bg-gray-300 border p-2" onClick={getData}>getdata</button>
    </>
  )
}

export default App