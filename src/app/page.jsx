'use client'

import Services from '@/components/Services/Services.jsx';
import Footer from '../components/layout/footer.jsx';
import Navbar from '../components/layout/navbar.jsx';
import Home from '../components/Home/home.jsx';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Footer />
    </div>
  )
}

export default Page;
