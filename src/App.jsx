import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import BrandCard from './components/BrandCard'
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import "./styles/main.scss"
import { brandsData, featuredCars, comparisonCars } from './assets/data'


function App() {
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
    }, 1200)
  })
  const loader = isLoad ? 'none' : 'block'
  return (
    <>
      <Navbar />
      <main style={{ display: loader }}>
        <section className="hero-section">
          <video src="/video/herobg.mp4" autoPlay loop muted playsInline>
            Error in video.
          </video>
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              The World of <span>HYPERCARS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
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
          <h2>🔥 Featured Hypercars</h2>
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
            <motion.div
              className="comparison-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={car.image} alt={car.name} className="car-img" />
              <div className="car-info">
                <h3>{car.name}</h3>
                <p><strong>Brand:</strong> {car.brand}</p>
                <p><strong>HP:</strong> {car.horsepower}</p>
                <p><strong>0-100 km/h:</strong> {car.acceleration}</p>
                <p><strong>Top Speed:</strong> {car.topSpeed}</p>
                <p><strong>Weight:</strong> {car.weight}</p>
                <button className='compare-btn'>Compare</button>
              </div>
            </motion.div>)
          })}
          </div>
        </section>

        <section className="gallery-section">
          <h2>Experience the Sound</h2>
          <p>Feel the roar of a V12 or the whistle of a turbo in our immersive video gallery.</p>
        </section>
      </main>
      <section className="loader">
        <img src="/images/logopage.png" alt="loading" />
        <strong>Loading...</strong>
      </section>
    </>
  )
}

export default App
