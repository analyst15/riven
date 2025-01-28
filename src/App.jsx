import HeroSection from './components/HeroSection'
import MobileSection from './components/MobileSection'
import StartInvesting from './components/StartInvesting'
import RivenAcademy from './components/RivenAcademy'
import OurProducts from './components/OurProducts'
import Footer from './components/Footer'
import FooterNav from './components/FooterNav'
import Border from './components/Border'
import Navbar from './components/Navbar'
import BottomBar from './components/BottomBar'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        {/**<Navbar />**/}
        <div className="">
          <LandingPage />
        </div>
        <BottomBar />
        <div className="max-w-5xl mx-auto px-6">
          <MobileSection />
        </div>
        <Border />
        {/**<div className="max-w-5xl mx-auto px-6">
          <StartInvesting />
        </div>
        <Border />**/}
        <div className="max-w-5xl mx-auto px-6">
          <RivenAcademy />
        </div>
        {/**<Border />
        <div className="max-w-5xl mx-auto px-6">
          <OurProducts />
        </div>
        <Border />
        <div className="max-w-5xl mx-auto px-6">
          <Footer />
        </div>**/}
        <FooterNav />
      </div>
    </>
  )
}

export default App