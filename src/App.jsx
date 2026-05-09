import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Splash from './component/Splash';
import Hero from './pages/Hero';
import About from './pages/About';
import FeaturesLine from './pages/FeatureLine';
import Skills from './pages/Skills';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Testimonial from './component/Testimonial';
import Service from './pages/Service';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Project from './pages/Project';

const fadeVariants = {
  in: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  out: { opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => setShowSplash(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            className="overlay"
            variants={fadeVariants}
            initial="in"
            exit="out"
          >
            <Splash onFinish={handleSplashFinish} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            className="overlay"
            variants={fadeVariants}
            initial="out"
            animate="in"
          >
            <motion.div>
              <Hero />
            </motion.div>

            <div>
              <About />
            </div>

            <div>
              <FeaturesLine />
            </div>

            <div>
              <Skills />
            </div>
            <div>
              <Project />
            </div>

            <div>
              <Service />
            </div>

            <div>
              <Education />
            </div>

            <div>
              <Experience />
            </div>

           

            <div>
              <Testimonial />
            </div>

            <div>
              <Contact />
            </div>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
