import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './Btn'

function App() {

  return (
    <>
    <div className='flex bg-black justify-center flex-col items-center h-screen text-white'>
      <h1 className='font-bold text-4xl tex'>Hello <span className='text-red-300'>!</span></h1>
      <div>
      <Btn text="Add"></Btn>
      <Btn ></Btn>
      </div>
    </div>
    </>
  )
}

export default App