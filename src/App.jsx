import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from "./components/HeaderComponent"
import MainComponent from './components/MainComponent'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {


  return (

    <>
      <HeaderComponent />
      <MainComponent />
    </>

  )
}

export default App
