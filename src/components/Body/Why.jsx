import React from 'react';
import './Why.css';

const Why = () => {
  const cards = [
    {
      heading: 'Tailored Courses',
      subParagraph: 'Designed just for ITI students.'
    },
    {
      heading: 'Industry-Specific Training',
      subParagraph: 'Get job-ready with specialized vocab.'
    },
    {
      heading: 'Flexible Learning',
      subParagraph: 'Mix of in-person and online classes.'
    },
    {
      heading: 'Top Educators',
      subParagraph: ' Learn from the best in the field.'
    }
  ];

  return (
      <>
        <h1 className=" my-5 why-head text-center" id='why'>Why<span className="why"> TalkItEasy?</span></h1>
    <div className="card-container container">
      {cards.map((card, index) => (
        <div className="card shadow" key={index}>
          <h2 className="card-heading">{card.heading}</h2>
          <p className="card-subParagraph">{card.subParagraph}</p>
        </div>
      ))}
    </div></>
  );
}

export default Why;
