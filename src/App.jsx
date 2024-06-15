import HeroSection from './components/HeroSection'
import MobileSection from './components/MobileSection'
import StartInvesting from './components/StartInvesting'
import RivenAcademy from './components/RivenAcademy'
import OurProducts from './components/OurProducts'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
      <HeroSection />
      <MobileSection />
      <StartInvesting />
      <RivenAcademy />
      <OurProducts />
      <Footer />
      </div>
    </>
  )
}

export default App