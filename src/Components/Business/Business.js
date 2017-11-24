import React from 'react';
import './Business.css';

let Business = {
 imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
 name: 'MarginOtto Pizzeria',
 address: '1010 Paddington Way',
 city: 'Flavortown',
 state: 'NY',
 zipCode: '10101',
 category: 'Italian',
 rating: 4.5,
 reviewCount: 90
};

class Busness extends React.Component {
render (){
  return (
  <div className="Business">
    <div className="image-container">
      <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
    </div>
    <h2>{Business.thisName}}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{Business.thisAddress}</p>
      <p>Bordertown</p>
      <p>{Business.thisState} {Business.thisZipcode}</p>
    </div>
    <div className="Business-reviews">
      <h3>ITALIAN</h3>
      <h3 className="rating">{Business.thisRating}</h3>
      <p>{Business.thisReviewCount}</p>
    </div>
  </div>
</div>)
}
};

export default Business;
