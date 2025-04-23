import React from 'react'
import "./styles/main.scss"

function App() {
  return (
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

    <section className="mark-section">
      <h1>Italian Monsters</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nesciunt quidem eos similique provident corrupti optio voluptas quibusdam eum et qui accusamus, iure fugiat exercitationem quis veniam iusto voluptates quos?</p>
    </section>

    <section className="featured-models">
      <h2>🔥 Featured Hypercars</h2>
      <div className="card-container">
        {/* Aquí van los cards de autos, luego los componemos si quieres */}
      </div>
    </section>

    <section className="mark-section">
      <h1>Thme MARK 3</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nesciunt quidem eos similique provident corrupti optio voluptas quibusdam eum et qui accusamus, iure fugiat exercitationem quis veniam iusto voluptates quos?</p>
    </section>

    </main>
  )
}

export default App
