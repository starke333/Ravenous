import React from 'react';
import './Business.css';



class Business extends React.Component {
render (){
  return (
  <div className="Business">
    <div className="image-container">
      <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
    </div>
    <h2>{this.props.Business.Name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.Business.Address}</p>
      <p>Bordertown</p>
      <p>{this.props.Business.State} {Business.Zipcode}</p>
    </div>
    <div className="Business-reviews">
      <h3>ITALIAN</h3>
      <h3 className="rating">{Business.Rating}</h3>
      <p>{this.props.Business.ReviewCount}</p>
    </div>
  </div>
</div>)
}
};

export default Business;
