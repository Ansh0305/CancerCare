import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AwarenessSection from "./components/AwarenessSection";
import SupportSection from "./components/SupportSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AwarenessSection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
