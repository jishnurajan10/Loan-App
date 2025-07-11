import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componants/Navbar/Navbar';
import Hero from './Componants/Hero/Hero';
import Title from './Componants/Title/Title';
import About from './Componants/About/About';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';
import Signup from './Componants/SignUp/SignUp';
import Login from './Componants/LogIn/LogIn';
import Dashboard from './Componants/Dashbord/Dashboard';

// Define a Home component for homepage content
const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
        <Dashboard/>
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
