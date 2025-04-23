import React from 'react'
import "../styles/brand.scss"

function BrandCard({id, cardBanner, brandName, logo, description, url}) {
    return (
        <div className="brand-card">
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
        </div>
    )
}

export default BrandCard
