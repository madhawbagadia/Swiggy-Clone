import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Restaurant from './Components/Restaurant'
import RestaurantMenu from './Components/RestaurantMenu'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  

  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/city/patna/:id' element={<RestaurantMenu/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
