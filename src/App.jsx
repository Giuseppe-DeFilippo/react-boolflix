import { useState } from 'react'
import './App.css'
import MainComponent from './components/MainComponent'
import GlobalContext from './contexts/GlobalContext'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import DefaultLayoutComponent from './components/DefaultLayoutComponent'
function App() {
  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayoutComponent />}>
            <Route path="/" element={<MainComponent />} />
            {/* <Route path="serieTv" element={ } /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App
