import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index.js';
import Home from './pages';
import Curicullum from './pages/curicullum';
import Study from './pages/study';
import Volunteer from './pages/volunteer';
import About from './pages/about';
import Contact from './pages/contact';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/curicullum' element={<Curicullum />} />
        <Route path='/study' element={<Study />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
};  

export default App;