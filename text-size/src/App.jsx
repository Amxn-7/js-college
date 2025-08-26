import { useState } from "react";
import reactLogo from "./assets/react.svg"; // adjust path if needed

export default function App() {
  const minFontSize = 10;
  const maxFontSize = 100;

  const [fontSize, setFontSize] = useState(24);

  const handleIncrement = () => {
    if (fontSize < maxFontSize) {
      setFontSize(fontSize + 2);
    }
  };

  const handleDecrement = () => {
    if (fontSize > minFontSize) {
      setFontSize(fontSize - 2);
    }
  };

  return (
    <main className="bg-lime-100 h-screen flex flex-col items-center justify-center gap-y-10">
      <div className="flex items-center gap-x-4">
        <img src={reactLogo} alt="React Logo" className="h-16 w-16" />
        <h1 className="text-5xl font-bold text-gray-800">Test Text Size App</h1>
      </div>

      <div className="flex items-center justify-center rounded-lg shadow-md border border-gray-300 p-8 gap-x-6 bg-gradient-to-r from-[#a925d9] via-[#5512e6] to-[#310e4a] h-screen w-full">
        <button
          onClick={handleIncrement}
          className="h-20 w-20 rounded-full bg-gray-600 text-white text-4xl font-bold transition-colors hover:bg-gray-700 active:bg-gray-800"
          disabled={fontSize >= maxFontSize}
        >
          +
        </button>

        <div
          className="font-semibold text-gray-100"
          style={{ fontSize: `${fontSize}px` }}
        >
          Test Text
        </div>

        <button
          onClick={handleDecrement}
          className="h-20 w-20 rounded-full bg-gray-600 text-white text-4xl font-bold transition-colors hover:bg-gray-700 active:bg-gray-800"
          disabled={fontSize <= minFontSize}
        >
          -
        </button>
      </div>
    </main>
  );
}