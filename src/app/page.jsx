'use client'
import React from 'react'
import Navbar from '../components/layout/navbar.jsx' // Remove .jsx if using Next.js 13+
import Footer from '../components/layout/footer.jsx'
import Home from '../components/Home/home.jsx'
const Page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default Page;
