import React from 'react'
import './Product.css'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
const Product = () => {
  return (
    <>
    <div className="prodcut-container">
  <h2>Cakes</h2>
  <div className="products">
   <ProductCard
      img="https://pngtree.com/templates/delicious-chocolate-cake.png"
      title="Chocolate Cream Cake"
      price={499}
      off={12}
      rating={4.5}
    />
    <ProductCard
      img="https://pngtree.com/templates/fresh-fruit-cream-cake.png"
      title="Fresh Fruit Cake"
      price={599}
      off={15}
      rating={4.7}
    />
    <ProductCard
      img="https://pngtree.com/templates/red-velvet-slice-cake.png"
      title="Red Velvet Slice"
      price={549}
      off={10}
      rating={4.6}
    />
    <ProductCard
      img="https://pngtree.com/templates/vanilla-birthday-cake.png"
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
    <ProductCard img="https://images.unsplash.com/photo-1603035703387-7f0e3a2ffefb" title="Choco Chip Cookies" price={249} off={8} rating={4.2} />
    <ProductCard img="https://images.unsplash.com/photo-1600858941294-56d1a9b70e5f" title="Oats & Raisin Cookies" price={199} off={10} rating={4.1} />
    <ProductCard img="https://images.unsplash.com/photo-1611648617288-d5bfc6f6bc61" title="Nutty Almond Cookies" price={299} off={15} rating={4.3} />
    <ProductCard img="https://images.unsplash.com/photo-1612197527679-75c64613cd12" title="Butter Cookies" price={229} off={5} rating={4.0} />
  </div>
</div>

<div className="prodcut-container">
  <h2>Croissants</h2>
  <div className="products">
    <ProductCard img="https://images.unsplash.com/photo-1611824209241-0fa1911d4e32" title="Classic French Croissant" price={149} off={7} rating={4.6} />
    <ProductCard img="https://images.unsplash.com/photo-1625291552481-405d70e5f963" title="Chocolate Croissant" price={179} off={9} rating={4.8} />
    <ProductCard img="https://images.unsplash.com/photo-1607532941433-c14c794b3696" title="Almond Croissant" price={199} off={10} rating={4.4} />
    <ProductCard img="https://images.unsplash.com/photo-1630340899469-6f8a7fd8ad95" title="Butter Croissant" price={139} off={5} rating={4.3} />
  </div>
</div>

<div className="prodcut-container">
  <h2>Pastries</h2>
  <div className="products">
    <ProductCard img="https://images.unsplash.com/photo-1624382030656-398343f17e53" title="Tiramisu Pastry" price={349} off={12} rating={4.5} />
    <ProductCard img="https://images.unsplash.com/photo-1578985545062-69928b1d9587" title="Black Forest Pastry" price={299} off={10} rating={4.6} />
    <ProductCard img="https://images.unsplash.com/photo-1586015558577-bf771d6d2488" title="Pineapple Pastry" price={279} off={8} rating={4.2} />
    <ProductCard img="https://images.unsplash.com/photo-1605296867304-46d5465a13f1" title="Chocolate Ganache Pastry" price={399} off={15} rating={4.7} />
  </div>
</div>

<div className="prodcut-container">
  <h2>Cupcakes</h2>
  <div className="products">
    <ProductCard img="https://images.unsplash.com/photo-1616679002744-ec8d22714c08" title="Vanilla Sprinkle Cupcake" price={149} off={10} rating={4.3} />
    <ProductCard img="https://images.unsplash.com/photo-1586985287813-8137fd943bb6" title="Chocolate Cupcake" price={179} off={12} rating={4.5} />
    <ProductCard img="https://images.unsplash.com/photo-1618148208733-c16bafd75d12" title="Strawberry Cupcake" price={169} off={9} rating={4.4} />
    <ProductCard img="https://images.unsplash.com/photo-1599785209798-e9e4c74fdc4d" title="Red Velvet Cupcake" price={189} off={11} rating={4.6} />
  </div>
</div>

    </>
  )
}

export default Product
