import './ProductDelivered.css'
import ProductCard from "./ProductCard";



const ProductDelivered = () => {
  return (
   <div>
    <h1 className="product-heading">Top Selling Product</h1>
    <div className="products">
      <ProductCard img="https://i.pinimg.com/1200x/00/93/9a/00939a74462ad60b7d521a2665e8b170.jpg" title="Oats & Raisin Cookies" price={199} off={10} rating={4.1} />
      <ProductCard
      img="https://i.pinimg.com/1200x/ee/af/97/eeaf9709ae4e6db000850a7ca41ac902.jpg"
      title="Vanilla Birthday Cake"
      price={699}
      off={18}
      rating={4.8}
    />
    <ProductCard img="https://i.pinimg.com/736x/05/be/7c/05be7c8379d4b6dd3f21516fd3099185.jpg" title="Black Forest Pastry" price={299} off={10} rating={4.6} />
      <ProductCard img="https://i.pinimg.com/1200x/97/ea/0c/97ea0c2a71d5fb275f495cfba44a6fd2.jpg" title="Vanilla Sprinkle Cupcake" price={149} off={10} rating={4.3} />
    </div>
   </div>
    
  );
};

export default ProductDelivered;
