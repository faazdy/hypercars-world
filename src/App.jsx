import React from 'react'
import BrandCard from './components/BrandCard'
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import "./styles/main.scss"
import { brandsData, featuredCars } from './assets/data'


function App() {
  return (
    <>
    <Navbar />
      <main>
        <section className="hero-section">
          <video src="/video/herobg.mp4" autoPlay loop muted playsInline>
            Error in video.
          </video>
          <div className="hero-content">
            <h1>The World of <span>HYPERCARS</span></h1>
            <p>Explore the amazing world of the super cars!</p>
            <button className='cta'>More Cars</button>
          </div>
        </section>

      <section className="brand-section">
        <h2>Amazing Monsters</h2>
        <div className="brand-cards-container">
          {brandsData.map(brand => {
            return <BrandCard {...brand} key={brand.id}/>
          })}
        </div>
      </section>

      <section className="featured-models">
        <h2>🔥 Featured Hypercars</h2>
        <div className="card-container">
          <Carrousel data={featuredCars}/>
        </div>
      </section>

      <section className="comparison-section">
        <h2>Battle of the Beasts</h2>
        <p>Compare specs of the world’s fastest machines.</p>
        {/* Aquí puedes meter una tabla o grid con comparativas */}
      </section>

      <section className="gallery-section">
        <h2>Experience the Sound</h2>
        <p>Feel the roar of a V12 or the whistle of a turbo in our immersive video gallery.</p>
        {/* Grid de videos o un carrusel */}
      </section>
      <section className="loader">
          <h1>LOADING....</h1>
      </section>
      </main>
    </>
  )
}

export default App
