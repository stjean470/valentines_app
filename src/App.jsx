import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppProvider from './AppProvider'
import Nav from './components/Nav'
import LoveHero from './components/LoveHero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WillYou from './pages/WillYou'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/will-you' element={<WillYou />} />
          <Route path='/presentation' element={<Presentation />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
