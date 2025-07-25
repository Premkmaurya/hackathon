import React from 'react'
import './ProductCard.css'

function ProductCard() {
	return (
		<div className="card">
      <div className="card-image">
        <img
          src="https://ik.imagekit.io/sk6swwncb/cookie-2.png?updatedAt=1753338889105" 
          alt="Rich Chocolate Truffle Cake"
        />
      </div>

      <div className="card-content">
        <h3 className="product-title">Rich Chocolate Truffle Cake</h3>
        <div className="price-section">
          <span className="price">₹549</span>
          <span className="mrp">₹599</span>
          <span className="offer">9% OFF</span>
        </div>
        <div className="rating-section">
          <span className="rating">4.9 ★</span>
        </div>
      </div>
    </div>
	)
}

export default ProductCard