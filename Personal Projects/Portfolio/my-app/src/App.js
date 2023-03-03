import './App.scss';
import './components/Sass/style.scss'
import React from 'react';
import About from './components/UI/About';
import Skills from './components/UI/Skills';
import Project from './components/UI/Projects';
import Contacts from './components/UI/Contacts';
import Navbar from './components/UI/Navbar';

const PortfolioApp = () => {

  const first = document.querySelector('.header-banner__first')
  const last = document.querySelector('.header-banner__last')
  const text = document.querySelector('.text')

  window.addEventListener('scroll', () => {
      const value = window.scrollY;

      first.style.top = value * 0.7 + 'px'
      last.style.bottom = value * 0.5 + 'px'
      text.style.top = value * 1 + 'px'
  })

  return (
      <React.Fragment>
          <About/>
          <Skills/>
          <Project/>
          <Contacts/>
      </React.Fragment>
  )
}

export default PortfolioApp
