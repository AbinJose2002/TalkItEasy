import React, {useState} from 'react'
import './Offer.css'

const Offer = () => {
    const offers = [
    {
        title: 'English Courses',
        description: 'From beginner to advanced.'
    },
    {
        title: 'Industry Training',
        description: 'Specialized vocabulary and communication skills.'
    },
    {
        title: 'Corporate Programs',
        description: 'Tailored training for ITI institutions.'
    }
    ];
 const [selectedOffer, setSelectedOffer] = useState(offers[0]);
    return (
        <div className='container my-5'>
            <h1 className=" my-5 why-head text-center">What we <span className="why">Offer?</span></h1>
            <div className="offers-container">
      <div className="button-group">
        {offers.map((offer, index) => (
          <button 
            key={index} 
            className={`offer-button ${selectedOffer.title === offer.title ? 'active' : ''}`}
            onClick={() => setSelectedOffer(offer)}
          >
            {offer.title}
          </button>
        ))}
      </div>
      <div className="offer-details text-center">
        <h2 className="offer-title">{selectedOffer.title}</h2>
        <p className="offer-description">{selectedOffer.description}</p>
      </div>
    </div>
        </div>
    )
}

export default Offer
