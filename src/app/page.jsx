'use client'

import Services from '@/components/Services/Services.jsx';
import Footer from '../components/layout/footer.jsx'
import Navbar from '../components/layout/navbar.jsx';



const Page = () => {
  return (
    <div>
      <Navbar />
      <Services/>
      <Footer />
    </div>
  )
}

export default Page;
