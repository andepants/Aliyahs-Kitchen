import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App relative">
      <h1 className="relative top-0 text-orange-500 m-4 leading-10">Aliyah's Kitchen</h1>
      <div>
        Hi, Paula! Just started working on the website! Just working on functionality, and then later work on making it look better!
      </div>
      <div>
        -Andrew
      </div>
      <Outlet />
    </div>
  )
}

export default App
