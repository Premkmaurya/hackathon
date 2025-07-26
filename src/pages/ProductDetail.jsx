import React, { useState } from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import "./ProductDetail.css"
import { toast,Slide } from 'react-toastify';

function ProductDetail() {
  const [weight, setWeight] = useState('0.5 Kg');
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state;
  
  const buyProduct = () =>{
       toast.success('Order Confirmed.', {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       transition: Slide,
     });
       navigate('/products')
  }


  return (
    <div className="cake-container">
      <div className="cake-image-section">
        <img src={data.img} alt="Rich Chocolate Truffle Cake" className="cake-image" />
        <div className="badge">Best Seller</div>
      </div>

      <div className="cake-details">
        <h2>{data.title}</h2>
        <div className="rating">
          <span>⭐ {data.rating} </span>
          <a href="#">(6.6K Reviews)</a>
        </div>
        <div className="price">
          <span className="current-price">₹{Math.floor(data.price - (data.price*data.off/100))}</span>
          <span className="original-price">{data.price}</span>
          <span className="discount">({data.off}% OFF)</span>
        </div>
        <p className="description">
          Dive into the richness of the Chocolate Truffle Cake, where each velvety layer of chocolate delivers an intense, smooth flavour.
        </p>

        <div className="weight-section">
          <p><strong>Select Weight</strong></p>
          {["0.5 Kg", "1 Kg", "1.5 Kg", "2 Kg", "4 Kg"].map((w) => (
            <button
              key={w}
              className={`weight-btn ${weight === w ? 'selected' : ''}`}
              onClick={() => setWeight(w)}
            >
              {w}
            </button>
          ))}
        </div>

        <div className="message-section">
          <label>Cake Message</label>
          <input type="text" placeholder="Write A Sweet Wish!" maxLength={25} />
        </div>

        <div className="delivery-info">
          <p><strong>Delivery Location</strong></p>
          <input type="text" placeholder="Write A Sweet Wish!" maxLength={25} />
          <p>🚚 Earliest Delivery: 2 - 3 Hrs</p>
        </div>

        <div className="action-buttons">
          <button onClick={buyProduct} className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
