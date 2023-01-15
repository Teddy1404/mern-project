import React from 'react'
import Navbar from './components/Navbar'
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from  './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
const App = () => {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
  <Route  path="/" element={<Home />}/>
  <Route  path="/about" element={<About />}/>
  <Route  path="/contact" element={<Contact />}/>
  <Route  path="/login" element={<Login />}/>
  <Route  path="/signup" element={<Signup />}/>
  <Route  element={<Error/>}/>
</Routes>
</Router>
   </>
  )
}

export default App
