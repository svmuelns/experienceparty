import HeroSection from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Separator from "./components/about/Separator";
import AboutSection from "./components/about/About";
import ServiceSection from "./components/service/Service";
import SeparatorTwo from "./components/service/SeparatorTwo";
import PricingSection from "./components/pricing/Pricing";
import ContactSection from "./components/contact/Contact";
import FooterSection from "./components/footer/Footer";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Separator />
    <AboutSection />
    <ServiceSection />
    <SeparatorTwo />
    <PricingSection />
    <ContactSection />
    <FooterSection />
    </>
  );
}

export default App
