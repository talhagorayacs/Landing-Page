import React from 'react';
import Banner from "./components/Banner";
import Design from "./components/Design";
import Header from "./components/Header";
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Work from './components/Work';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

function App() {
  return (
    <div className="w-full bg-no-repeat bg-center bg-cover relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-white relative z-10">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
      </div>
      <div className="w-full absolute top-0 left-0 z-0">
        <Design />
      </div>
      <div className="relative z-20">
        <Home />
        <Services />
        <Work />
        <AboutUs/>
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
