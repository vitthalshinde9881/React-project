import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white 
        px-2 py-3 rounded-3xl'>
        <button
        onClick={() => setColor("red")}
        className='outline-none px-4 py-1rounded-full text-ellipsis'
        style={{backgroundColor: "red"}}>Red</button>
        
        <button
        onClick={() => setColor("red")}
        className='outline-none px-4 py-1rounded-full text-ellipsis'
        style={{backgroundColor: "Black"}}>Red</button>

       <button
       onClick={() => setColor("red")}
        className='outline-none px-4 py-1rounded-full text-ellipsis'
        style={{backgroundColor: "Blue"}}>Red</button>
      </div>
      
    </div>
    
    </>
  )
}

export default App
