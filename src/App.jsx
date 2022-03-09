import { useState } from 'react'
import './App.css'
import {Route, Routes } from "react-router-dom"

import {Home, Login, Signup} from "./Pages"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
       <Route path="/home" element={<Home/>}/>
     </Routes>
    </div>
  )
}

export default App
