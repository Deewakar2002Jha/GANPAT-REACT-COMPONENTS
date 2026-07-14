import React from 'react'
// import ClassComponents from './components/ClassComponents'
// import FunctionalComponents from './components/FunctionalComponents'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      {/* <ClassComponents />
      <FunctionalComponents /> */}
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App