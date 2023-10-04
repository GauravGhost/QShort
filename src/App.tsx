import { useEffect, useState } from 'react'
import './App.css'
import {fetch} from '../lib/api'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
function App() {
  return (
  <>
  <Navbar />
  <Home />
  <Footer />
  </>
  )
}

export default App
