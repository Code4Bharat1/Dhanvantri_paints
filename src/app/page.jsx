import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero from "@/components/Society/Hero"
import Society from "@/components/Society/Society"
import Services from "@/components/Society/Services"
import OneStop from "@/components/Society/OneStop"

const page= () => {
  return (
    <>
    <Navbar/>
    <Hero />
    <Society/>
    <Services/>
    <OneStop/>
    <Footer />
    </>
  )
}

export default page;