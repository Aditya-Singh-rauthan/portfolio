import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <Header/>
      <Navigation/>
      <About/>
      <Experience/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App