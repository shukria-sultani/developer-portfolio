import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Profile from './Components/Profile';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import profilePic from "./assets/images/profile.jpg"; 
import ContactForm from './Components/ContactFrom';
import FeedbackWall from './Components/FeebackWall';

function HomePage() {
  const profileInfo = {
    name: "Shukria Sultani",
    title: "Frontend Developer",
    bio: "I am a passionate frontend developer with a love for creating beautiful and functional user interfaces. I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
  };

  return (
    <>
      <Header message={"Hey, Welcome to my Portfolio"} />
      {/* You can place a hero or intro section here as part of Home */}
      <About />
      <Projects />
      <Profile name={profileInfo.name} title={profileInfo.title} bio={profileInfo.bio} img={profilePic} />
      <ContactForm />
      <FeedbackWall />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Persistent across all pages */}
      <Routes>
        {/* Home route renders a composed home page with sections */}
        <Route path="/" element={<HomePage />} />
        
        {/* Individual routes for other standalone pages */}
        <Route path="/header" element={<Header message={"Hey, Welcome to my Portfolio"} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile name="Shukria Sultani" title="Frontend Developer" bio="..." img={profilePic} />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/feedback" element={<FeedbackWall />} />

        {/* Optional: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer /> {/* Persistent footer on all pages */}
    </BrowserRouter>
  );
}

export default App;