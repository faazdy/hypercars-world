import React from 'react'
import { motion } from 'framer-motion'
import "../styles/brand.scss"

function BrandCard({ id, cardBanner, brandName, logo, description, url }) {
  return (
    <motion.div 
      className="brand-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="car-img">
        <img src={cardBanner} alt="banner" />
      </div>
      <div className="logo">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="info">
        <h3>{brandName}</h3>
        <p>{description}</p>
        <a href={url}>SHOW MORE</a>
      </div>
    </motion.div>
  )
}

export default BrandCard

