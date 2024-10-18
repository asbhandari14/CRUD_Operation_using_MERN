import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ShowAllUser from './Pages/ShowAllUser';
import UpdateExistingUser from './Pages/UpdateExistingUser';




const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<ShowAllUser />} />
          <Route path="/update/:userId" element={<UpdateExistingUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
