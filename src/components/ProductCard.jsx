import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
	return (
		<div className="card">
      <div className="card-image">
        <img
          src={props.img} 
          alt="Rich Chocolate Truffle Cake"
        />
      </div>

      <div className="card-content">
        <h3 className="product-title">{props.title}</h3>
        <div className="price-section">
          <span className="price">₹{props.price}</span>
          <span className="mrp">₹{Math.floor(props.price - (props.price*props.off/100))}</span>
          <span className="offer">{props.off}% OFF</span>
        </div>
        <div className="rating-section">
          <span className="rating">{props.rating} ★</span>
        </div>
      </div>
    </div>
	)
}

export default ProductCard