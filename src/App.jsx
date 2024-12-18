import React from 'react'


import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Footer from './Components/Footer'
function App() {
  return (
    <div className='h-screen w-full bg-[#202124] text-white'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App