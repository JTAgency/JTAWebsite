import React from "react";
// Sections
import TopNavbar2 from "../components/Nav/TopNavbar2";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function ContactUs() {
  return (
    <>
      <TopNavbar2 />
      <div style={{ marginTop: '60px' }}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}


