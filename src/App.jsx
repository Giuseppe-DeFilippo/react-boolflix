import { useState } from 'react'
import './App.css'
import MainComponent from './components/MainComponent'
import GlobalContext from './contexts/GlobalContext'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import DefaultLayoutComponent from './components/DefaultLayoutComponent'
import { GlobalProvider } from './contexts/GlobalContext'
function App() {
  return (
    <GlobalProvider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayoutComponent />}>
            <Route path="/" element={<MainComponent />} />
            {/* <Route path="serieTv" element={ } /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App
