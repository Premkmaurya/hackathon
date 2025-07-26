import React from 'react'
import './Product.css'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
const Product = () => {
  return (
    <>
    <div className="prodcut-container">
    <div className="product-div">
      <h2>Cakes</h2>
  <div className="products">
   <ProductCard
    img="https://e7.pngegg.com/pngimages/890/140/png-clipart-black-forest-cake-birthday-cake-chocolate-cake-christmas-cake-fruitcake-wedding-cake-birthday-cake-cream-food.png"
      title="Chocolate Cream Cake"
      price={499}
      off={12}
      rating={4.5}
    />
    <ProductCard
      img="https://static.vecteezy.com/system/resources/previews/047/842/674/non_2x/black-forest-cake-with-chocolate-sponge-cake-cherries-and-whipped-cream-png.png"
      title="Fresh Fruit Cake"
      price={599}
      off={15}
      rating={4.7}
    />
    <ProductCard
      img="https://i.pinimg.com/1200x/3f/1e/e4/3f1ee4ea51bf419acc207f7fefc0cc44.jpg"
      title="Red Velvet Slice"
      price={549}
      off={10}
      rating={4.6}
    />
    <ProductCard
      img="https://i.pinimg.com/1200x/ee/af/97/eeaf9709ae4e6db000850a7ca41ac902.jpg"
      title="Vanilla Birthday Cake"
      price={699}
      off={18}
      rating={4.8}
    />
  </div>
</div>

<div className="prodcut-container">
  <h2>Cookies</h2>
  <div className="products">
    <ProductCard img="https://i.pinimg.com/736x/d4/21/65/d4216552edd56870fa5b0889ec2e51d4.jpg" title="Choco Chip Cookies" price={249} off={8} rating={4.2} />
    <ProductCard img="https://i.pinimg.com/1200x/00/93/9a/00939a74462ad60b7d521a2665e8b170.jpg" title="Oats & Raisin Cookies" price={199} off={10} rating={4.1} />
    <ProductCard img="https://i.pinimg.com/736x/0c/d8/e7/0cd8e7bcf7046a6b12848e1956366c9c.jpg" title="Nutty Almond Cookies" price={299} off={15} rating={4.3} />
    <ProductCard img="https://i.pinimg.com/736x/46/81/16/4681168dad2826a4f26b11f2bd9ff864.jpg" title="Butter Chocolate Cookies" price={229} off={5} rating={4.0} />
  </div>
</div>

<div className="prodcut-container">
  <h2>Croissants</h2>
  <div className="products">
    <ProductCard img="https://i.pinimg.com/1200x/90/3f/6d/903f6d8e0358c346af08d4b2f355ac54.jpg" title="Classic French Croissant" price={149} off={7} rating={4.6} />
    <ProductCard img="https://i.pinimg.com/1200x/df/94/14/df94145e6fe7f93cee2e469c8a358b6b.jpg" title="Chocolate Croissant" price={179} off={9} rating={4.8} />
    <ProductCard img="https://i.pinimg.com/736x/fb/1e/1f/fb1e1fb15aae830ec041d61fd2760c28.jpg" title="Almond Croissant" price={199} off={10} rating={4.4} />
    <ProductCard img="https://i.pinimg.com/736x/c8/83/40/c883409163bb441326b46975b022497e.jpg" title="Butter Croissant" price={139} off={5} rating={4.3} />
  </div>
</div>

<div className="prodcut-container">
  <h2>Pastries</h2>
  <div className="products">
    <ProductCard img="https://i.pinimg.com/736x/a9/96/3f/a9963fed6e03811101b9b0452bd973fb.jpg" title="Tiramisu Pastry" price={349} off={12} rating={4.5} />
    <ProductCard img="https://i.pinimg.com/736x/05/be/7c/05be7c8379d4b6dd3f21516fd3099185.jpg" title="Black Forest Pastry" price={299} off={10} rating={4.6} />
    <ProductCard img="https://i.pinimg.com/736x/6f/4e/ce/6f4ecefc1c6b76b8c8e84d641ae783ae.jpg" title="Pineapple Pastry" price={279} off={8} rating={4.2} />
    <ProductCard img="https://i.pinimg.com/736x/c7/cd/74/c7cd747edfd6645a804c289a8d80d1a7.jpg" title="Chocolate Ganache Pastry" price={399} off={15} rating={4.7} />
  </div>
</div>

<div className="prodcut-container">
  <h2>Cupcakes</h2>
  <div className="products">
    <ProductCard img="https://i.pinimg.com/1200x/97/ea/0c/97ea0c2a71d5fb275f495cfba44a6fd2.jpg" title="Vanilla Sprinkle Cupcake" price={149} off={10} rating={4.3} />
    <ProductCard img="https://i.pinimg.com/736x/eb/37/e5/eb37e5503c59d5b34451dfb7f24208a7.jpg" title="Chocolate Cupcake" price={179} off={12} rating={4.5} />
    <ProductCard img="https://i.pinimg.com/736x/4c/e8/52/4ce852704953aba4e684641cef96734f.jpg" title="Strawberry Cupcake" price={169} off={9} rating={4.4} />
    <ProductCard img="https://i.pinimg.com/736x/00/92/e4/0092e4e54d06caa4e0c9ed0167b4bc25.jpg" title="Red Velvet Cupcake" price={189} off={11} rating={4.6} />
  </div>
    </div>
</div>

    </>
  )
}

export default Product
