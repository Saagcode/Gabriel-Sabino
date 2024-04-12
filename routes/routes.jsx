import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/index';
import About from '../pages/about/index';
import Portfolio from '../pages/portfolio/index';
import Experiences from '../pages/experiences/index';
import Contact from '../pages/contact/index';

function routes() {
  return (
    <HashRouter>
        <Routes>
            <Route path='*' element={<Navigate to={'/home'}/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/experiences' element={<Experiences />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </HashRouter>
  )
}

export default routes