import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Profile from './Components/Profile';

//images
import profilePic from "./assets/images/profile.jpg"; 
function App() {

const profileInfo = {
  name: "Shukria Sultani",
  title: "Frontend Developer",
  bio: "I am a passionate frontend developer with a love for creating beautiful and functional user interfaces. I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
}
  return (
    <>
      <Navbar />
      <Header  message={"Hey, Welcome to my Portfolio"}/>
      <Profile  name={profileInfo.name}  title={profileInfo.title} bio={profileInfo.bio} img={profilePic} />
    </>
  )
}

export default App
