import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import BrandCard from './components/BrandCard'
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import ComparisonCard from './components/ComparisonCard'


import "./styles/main.scss"
import { brandsData, featuredCars, comparisonCars } from './assets/data'


function App() {
  const [isLoad, setIsLoad] = useState(true)
  
  useEffect(() => {
    const handleLoad = () => {
      setIsLoad(false);
    };

    //se ejecuta cuando todo el contenido esta completamente cargado
    window.addEventListener("load", handleLoad);

    //fugas de memoria
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const loaderDisplay = isLoad ? 'flex' : 'none';
  return (
    <>
      <Navbar />
      <main style={{ display: isLoad ? 'none' : 'block' }}>
        <section className="hero-section">
          <video src="/video/herobg.mp4" autoPlay loop muted playsInline>
            Error in video.
          </video>
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The World of <span>HYPERCARS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Explore the amazing world of the super cars!
            </motion.p>
            <motion.button
              className='cta'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            > More Cars </motion.button>
          </div>
        </section>

        <section className="brand-section">
          <h2>Amazing Monsters</h2>
          <div className="brand-cards-container">
            {brandsData.map(brand => {
              return <BrandCard {...brand} key={brand.id} />
            })}
          </div>
        </section>

        <section className="featured-models">
          <h2>Featured Hypercars</h2>
          <div className="card-container">
            <Carrousel data={featuredCars} />
          </div>
        </section>

        <section className="comparison-section">
          <h2>Battle of the Beasts</h2>
          <p>Compare specs of the world’s fastest machines.</p>
          <div className="comparison-grid">
            {comparisonCars.map(car => {
              return (
                <ComparisonCard car={car} key={car.id} />
              )
            })}
          </div>
        </section>

        <section className="gallery-section">
          <h2>Experience the Sound</h2>
          <p>Feel the roar of a V12 or the whistle of a turbo in our immersive video gallery.</p>
          <div className="gallery-videos">
            <div className="video-card">
              <iframe width="560" height="315"
                src="https://www.youtube.com/embed/EcIp-dNLFYM?si=XDO-by9DgzKtOLrM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
              <div className="video-card-text">
                <h5>V12 Engine Sound</h5>
                <p>
                  Experience the raw power of a V12 engine in this thrilling sound showcase.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Hypercars World. All rights reserved.</p>
          <ul className="social-links">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </footer>

      <section className="loader" style={{ display: loaderDisplay }}>
        <img src="/images/logopage.png" alt="loading" />
        <strong>Loading...</strong>
      </section>
    </>
  )
}

export default App
