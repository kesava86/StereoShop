import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx"
import Home from "../Pages/Home.jsx";


export default function ProfileNavigate() {
  return (
    <Routes>        
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
  )
}
