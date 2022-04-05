import { useState } from 'react'
import './App.css'
import {Route, Routes } from "react-router-dom"

import {Home, Login, Play, Signup} from "./Pages"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/play" element={<Play/>}/>
     </Routes>
    </div>
  )
}

export default App
