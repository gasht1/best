import React from 'react'
import Navbar from './components/Navbar';

import Intro from './Intro';
import Services from './components/Services';
import './components/Navbar.css'
import './components/Services'

import './Intro.css'
import './App.css'
import './components/services.css'
import Experience from './components/Experience';
import './components/Experience.css'
import Portfolio from './components/Portfolio';
import'./components/Portfolio.css';
import 'swiper/css';
import Testimonial from './components/Testimonial';
import'./components/Testimonial.css'


const App =()=> {
  return (
    <div >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
    </div>
  )
}

export default App
