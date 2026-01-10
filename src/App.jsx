import React from 'react'
import Header from './Components/Header'
import Navigate from './Navigation/Navigate'
import Footer from './Components/Footer'
import ProfileNavigate from './Navigation/ProfileNavigate'
import Home from './Pages/Home'


export default function App() {
  return (
    <>
    <Header/>
    <ProfileNavigate/>
    <Home/>
    <Footer/>
    </>
  )
}
