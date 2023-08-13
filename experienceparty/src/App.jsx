import HeroSection from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Separator from "./components/about/Separator";
import AboutSection from "./components/about/About";
import ServiceSection from "./components/service/Service";
import PricingSection from "./components/pricing/Pricing";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Separator />
    <AboutSection />
    <ServiceSection />
    <PricingSection />
    </>
  )
}

export default App
