import React from "react";
// Sections
import TopNavbar2 from "../components/Nav/TopNavbar2";
import Pricing from "../components/Sections/Pricing";
import Footer from "../components/Sections/Footer"

export default function GetStarted() {
  return (
    <>
      <TopNavbar2 />
      <div style={{ marginTop: '60px' }}>
        <Pricing />
      </div>
      <Footer />
    </>
  );
}


