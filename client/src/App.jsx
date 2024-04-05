import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Carousell } from './pages/Carousell'
import { Navbar } from './pages/Navbar'
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Carousell/>
    </>
  )
}

export default App