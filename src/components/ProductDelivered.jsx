import './ProductDelivered.css'
import ProductCard from "./ProductCard";



const ProductDelivered = () => {
  return (
   <div>
    <h1 className="product-heading">Top Selling Product</h1>
    <div className="products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
   </div>
    
  );
};

export default ProductDelivered;
