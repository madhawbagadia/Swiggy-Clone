import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import FoodOption from './Components/FoodOption'
import GroceryOption from './Components/GroceryOption'
import DineOption from './Components/DineOption'
import Restaurant from './Components/Restaurant'

function App() {
  

  return(
    <>
    <Header/>
    <FoodOption/>
    <GroceryOption/>
    <DineOption/>
    <Restaurant/>
    <div className='h-55 w-full max-w-[80%] container mx-auto mt-20'>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"/>
    </div>
    </>
  )
}

export default App
