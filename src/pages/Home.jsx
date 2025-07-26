import HeroSection from '../components/HeroSection'
import TopProduct from '../components/TopProduct'
import ProductDelivered from '../components/ProductDelivered'
import PromiseSection from '../components/PromiseSection'
import Footer from '../components/Footer'
import '../../src/index.css'


function Home() {


  return (
    <>
      <HeroSection />
      <ProductDelivered />
      <TopProduct />
      <div className="banner">
        <div className="outer-container">
          <img className='bg-img' src="https://ik.imagekit.io/sk6swwncb/bg.png?updatedAt=1753338915242" alt="" />
          <div className="container">
            <div className="content">
              <div className="image-section">
                <img
                  src="https://ik.imagekit.io/sk6swwncb/vecteezy_german-chocolate-cake-with_25268608.png?updatedAt=1753375360448"
                  alt="Pastry"
                  className="pastry-image"
                />
              </div>
              <div className="text-section">
                <h1>Whoosh</h1>
                <p className="banner-description">
                  Savor the perfect blend of flavors with our Whoosh pastry. Packed with a rich
                  chocolate filling and topped with crunchy nuts and vibrant berries, it's a treat
                  that's as delightful to the eye as it is to the tastebuds.
                </p>
                <ul>
                  <li><strong>Flavor:</strong> Chocolate, nuts, berries</li>
                  <li><strong>Serving Size:</strong> 200g</li>
                  <li><strong>Price:</strong> &#x20B9;499/-</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromiseSection />
      <Footer />
    </>
  )
}

export default Home
