// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Btn from './Btn'

// function App() {
//   const [unread,setUnread] = useState(10);
//   const [bgColor, setBgColor] = useState("white");


//   return (
//     <>
//     <div className='flex  justify-center flex-col items-center gap-5 h-screen'>
//       <p className='font-bold text-4xl'>Counter app</p>
//       <div>
//       <p className=' font-bold text-3xl text-black'>{unread}</p>
//       </div>

//       <div className='flex justify-center items-center gap-4 '>
      
//       <button onClick={()=>{
//         setUnread(unread+1);
        
//       }}
//       className='bg-blue-100 font-bold text-3xl rounded-full w-12 h-12 flex items-center justify-center'
//       >+</button>
//       <button onClick={()=>{
//         if(unread>0){
//           setUnread(unread-1);
//         }
        
//       }}
//       className='bg-blue-100 font-bold text-3xl rounded-full w-12 h-12 flex items-center justify-center'
//       >-</button>
//       <button onClick={()=>{
//         setUnread(0);
        
//       }}
//       className='bg-blue-100 font-bold text-3xl rounded-full w-12 h-12 flex items-center justify-center'
//       >0</button>

//       </div>
//     <div className='rounded-xl mt-10 flex flex-col justify-center items-center' style={{ backgroundColor: bgColor }}>
//       <div>
//       <h2 className='font-bold text-2xl'>Change color</h2>
//       </div>
//       <div>
//       <button className='bg-green-500 p-2 m-4 rounded-xl text-white' onClick={() => setBgColor("green")}>Green</button>
//       <button className='bg-blue-500 p-2 m-4 rounded-xl text-white' onClick={() => setBgColor("blue")}>Blue</button>
//       <button className='bg-red-500 p-2 m-4 rounded-xl text-white' onClick={() => setBgColor("red")}>Red</button>
//       </div>
//     </div>
//     </div>

//     </>
//   )
// }

// export default App

import { useState } from 'react'

function ChangeFont() {

    const [size, setSize] = useState(75);

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='h-[250px] w-[750px] flex item-center rounded-xl justify-evenly text-3xl border-2 bg-gradient-to-br from-blue-600 to-purple-600'>

                <button
                    onClick={() => {
                        setSize(size+5)
                    }} className='bg-white h-[50px] w-[50px] rounded-full w-1/6 my-auto'> +
                </button>

                <p className="w-4/6 my-auto flex items-center justify-center font-semibold text-white" style={{fontSize: size}}>Test Text</p>

                <button
                    onClick={() => {
                        setSize(size-5)
                    }} className='bg-white h-[50px] w-[50px] rounded-full w-1/6 my-auto'> -
                </button>
            </div>
        </div>
    )
}

export default ChangeFont
