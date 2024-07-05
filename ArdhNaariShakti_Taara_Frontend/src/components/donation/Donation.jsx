import React from 'react';
import "./Donation.css"

export const FlipCard = () => {
  return (
    <div className='donation-card'>
      <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="https://tse2.mm.bing.net/th/id/OIG3.wghULNG3NVvZH5BbKI8S?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h2>Please fill the feedback form.</h2>
          <p style={{color: "white"}}>Your feedback is crucial for us to improve ourself.</p>
          <p style={{color: "white"}}>Thank you!</p>
        </div>
      </div>
    </div>  
    <a href="https://forms.gle/NQakmZ8aQbkDFiD56">
    <div className='donation-text'>
        Please Provide Feedback
        <div className='donation-text1'> 
        Your feedback empowers the transgender community by fostering inclusivity and advocating for equal rights. It helps us offer vital services like healthcare, education, and legal assistance. Together, let's break down barriers and create a world where everyone thrives with dignity and respect. Thank you for being part of this journey towards positive change.        </div>
        </div>
        </a>
    </div>
  );
}

