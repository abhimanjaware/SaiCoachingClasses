import React from 'react'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Timetable from './Components/Timetable'
import WhyUsSection from './Components/Why'
import Toppers from './Components/Toppers'
import Stats from './Components/Stats'

function App() {
  return (
    <div className='flex justify-center flex-col items-center bg-linear-180 from-white to-blue-50/50 overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <WhyUsSection/>
      <Toppers/>
      <Stats/>
      {/* <Timetable/> */}
    {/* <Footer/> */}
    </div>
  )
}

export default App
