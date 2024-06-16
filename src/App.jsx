import HeroSection from './components/HeroSection'
import MobileSection from './components/MobileSection'
import StartInvesting from './components/StartInvesting'
import RivenAcademy from './components/RivenAcademy'
import OurProducts from './components/OurProducts'
import Footer from './components/Footer'
import FooterNav from './components/FooterNav'
import Border from './components/Border'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
      <HeroSection />
      <MobileSection />
      </div>
      <Border />
      <div className="max-w-5xl mx-auto px-6">
      <StartInvesting />
      </div>
      <Border />
      <div className="max-w-5xl mx-auto px-6">
      <RivenAcademy />
      </div>
      <Border />
      <div className="max-w-5xl mx-auto px-6">
      <OurProducts />
      </div>
      <Border />
      <div className="max-w-5xl mx-auto px-6">
      <Footer />
      </div>
      <FooterNav />
    </>
  )
}

export default App