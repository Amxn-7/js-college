import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#202124] text-white">
      {/* Card */}
      <div className="bg-black rounded-2xl p-10 flex flex-col md:flex-row gap-8 w-full max-w-4xl shadow-lg">
        
        {/* Left Side */}
        <div className="flex-1">
          {/* Google logo */}
          <div className="mb-6">
            <img
              src="https://i.pinimg.com/1200x/41/39/e0/4139e012cb52103c5d6c0afa8bec49cd.jpg"
              alt="Google"
              className="h-16 rounded-xl bg-transparent"
            />
          </div>

          <h1 className="text-4xl font-normal">Create a Google Account</h1>
          <p className="mt-3 text-gray-300">Enter your name</p>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 mb-1">First name</label>
              <input
                type="text"
                className="bg-transparent border border-gray-500 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 mb-1">Last name (optional)</label>
              <input
                type="text"
                className="bg-transparent border border-gray-500 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-blue-400 text-black px-6 py-2 rounded-full font-medium hover:bg-blue-300">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-wrap justify-between w-full max-w-4xl text-gray-400 text-sm">
        <div>English (United States)</div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  )
}

export default App