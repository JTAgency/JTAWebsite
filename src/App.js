import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./screens/Landing.jsx";
import GetStarted from "./screens/GetStarted.jsx";
import ContactUs from "./screens/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.js";

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
