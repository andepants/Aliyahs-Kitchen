import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App relative">
      <h1 className="relative top-0 text-orange-500">Aliyah's Kitchen</h1>
      <Outlet />
    </div>
  )
}

export default App
