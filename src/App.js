import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Banner from "./components/Banner";
import Design from "./components/Design";
import Header from "./components/Header";
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Work from './components/Work';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-no-repeat bg-center bg-cover relative overflow-x-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader color="#3498db" size={100} />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
