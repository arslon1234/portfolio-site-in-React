import React, { useState } from 'react'
import TopBar from './components/topBar/TopBar'
import Intro from './components/intro/Intro'
import PortFolio from './components/portfolio/PortFolio'
import Works from './components/works/Works'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import './app.scss'
import Menu from './menu/Menu'
export default function App() {
       const [menuOpen, setMenuOpen] = useState(false)
       return (
              <div className="app" >
               <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
               <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
               <div className="sections">
              <Intro/>
              <PortFolio/>
              <Works/>
              <Testimonial/>
              <Contact/>
               </div>
              </div>
              
       )
}
