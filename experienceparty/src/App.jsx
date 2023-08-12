import HeroSection from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Separator from "./components/about/Separator";
import AboutSection from "./components/about/About";
import ServiceSection from "./components/service/Service";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Separator />
    <AboutSection />
    <ServiceSection />
    </>
  )
}

export default App
