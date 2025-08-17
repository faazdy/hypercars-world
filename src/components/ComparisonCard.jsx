import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/comparisonCard.scss'

function ComparisonCard({car}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <motion.div
                className="comparison-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.1 }}
                key={car.id}
            >
                <img src={car.image} alt={car.name} className="car-img" />
                <div className="car-info">
                    <h3>{car.name}</h3>
                    <p><strong>0-100 km/h:</strong> {car.acceleration}</p>
                    <p><strong>Top Speed:</strong> {car.topSpeed}</p>
                    <button className='compare-btn' onClick={handleModalOpen}>View Details</button>
                </div>
            </motion.div>
            <div className="modal" style={{ display: isModalOpen ? 'flex' : 'none' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={handleModalOpen}>X</button>
                    </div>
                    <div className="modal-main">
                        <div className="modal-text">
                            <h1>{car.name}</h1>
                            <ul>
                                <li><strong>Brand:</strong> {car.brand}</li>
                                <li><strong>Acceleration:</strong> {`0-100 km/h in ${car.acceleration}`}</li>
                                <li><strong>HP:</strong> {car.horsepower}</li>
                                <li><strong>Top Speed:</strong> {car.topSpeed}</li>
                                <li><strong>Weight:</strong> {car.weight}</li>

                            </ul>
                        </div>
                        <img src={car.image} alt={`modal ${car.name}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComparisonCard
