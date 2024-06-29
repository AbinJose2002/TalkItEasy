import React from 'react'
import './MissionVision.css'

const MissionVision = () => {
    return (
        <div className='container my-5 row mx-auto'>
            <div className="mission col-sm-12 col-lg-6 my-5">
                <h1 className="mission-head text-center head">Mission</h1>
                <p className="mission-para text-center">Empowering ITI students with the English skills needed for career success.
                </p>
            </div>
            <div className="vission col-sm-12 col-lg-6 my-5">
                <h1 className="vission-head text-center head">Vision</h1>
                <p className="vission-para text-center">Bridging the language gap for ITI students in today’s global job market.
                </p>
            </div>
        </div>
    )
}

export default MissionVision
