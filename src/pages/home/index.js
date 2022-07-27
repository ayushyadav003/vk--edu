import React from 'react'
import CustomCarousel from '../../components/carousel/Carousel'
import Contactus from '../../components/contactus/Contactus'
import Courses from '../../components/courses/Courses'
import Faculty from '../../components/faculty/Faculty'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'

function index() {
  return (
    <div>
      <Navbar />
      <CustomCarousel />
      <Courses />
      <Contactus />
      <Faculty />
      <Footer />
    </div>
  )
}

export default index