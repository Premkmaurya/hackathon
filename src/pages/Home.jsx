import HeroSection from '../components/HeroSection'
import TopProduct from '../components/TopProduct'
import ProductDelivered from '../components/ProductDelivered'
import PromiseSection from '../components/PromiseSection'
import Footer from '../components/Footer'
// const items = [
//   "../public/videos/video-1.mp4",
//   "../public/videos/video-2.mp4",
//   "../public/videos/video-3.mp4",
//   "../public/videos/video-4.mp4",
//   "../public/videos/video-5.mp4",
//   "../public/videos/video-6.mp4",
//   "../public/videos/video-7.mp4",
//   "../public/videos/video-8.mp4",
//   "../public/videos/video-9.mp4",
//   "../public/videos/video-6.mp4",
//   "../public/videos/video-7.mp4",
//   "../public/videos/video-1.mp4",
//   "../public/videos/video-2.mp4",
// ];

function Home() {
  return (
    <>
      <HeroSection />
      <TopProduct />
      <ProductDelivered />
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
                <p className="description">
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
      {/* <GridMotion items={items} /> */}
      <Footer />
    </>
  )
}

export default Home
