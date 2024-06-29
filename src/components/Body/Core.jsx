import React from 'react';
import './Core.css';

const Why = () => {
  const coreCards = [
    {
      heading: 'Student-Centered'
    },
    {
      heading: 'Quality Education'
    },
    {
      heading: 'Innovation'
    },
    {
      heading: 'Integrity'
    }
    ,
    {
      heading: 'Empowerment'
    }
  ];

  return (
  <><h1 className=" my-5 why-head text-center">Core Values</h1>
    <div className="coreCard-container container">
      {coreCards.map((coreCard, index) => (
        <div className="coreCard shadow" key={index}>
          <h2 className="coreCard-heading">{coreCard.heading}</h2>
          <p className="coreCard-subParagraph">{coreCard.subParagraph}</p>
        </div>
      ))}
    </div>
  </>
  );
}

export default Why;
