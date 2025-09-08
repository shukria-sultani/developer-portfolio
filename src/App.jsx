import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import profilePic from "./assets/images/profile.jpg";
import ContactForm from "./Components/ContactFrom";

import NotFound from "./Components/NotFound";
import ProjectDetails from "./Components/ProjectDetails";

function HomePage() {


  return (
    <>
      <Header message={"Hey, Welcome to my Portfolio"} />
      <About />
      <Projects />
      <ContactForm />
    </>
  );
}

function App() {
  const id = useParams();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/header"
          element={<Header  />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
