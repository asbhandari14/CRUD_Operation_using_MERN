import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ShowAllUser from './Pages/ShowAllUser';
import UpdateExistingUser from './Pages/UpdateExistingUser';




const App = () => {

  let Backend_URL = "https://crud-operation-using-mern.onrender.com"

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home url={Backend_URL}/>} />
          <Route path="/show" element={<ShowAllUser url={Backend_URL}/>} />
          <Route path="/update/:userId" element={<UpdateExistingUser url={Backend_URL} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
