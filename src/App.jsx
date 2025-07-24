import HeroSection from '../src/components/HeroSection'
import GridMotion from './components/GridMotion';
import PromiseSection from './components/PromiseSection';
import TopProduct from './components/TopProduct';
const items = [
  "../public/videos/video-1.mp4",
  "../public/videos/video-2.mp4",
  "../public/videos/video-3.mp4",
  "../public/videos/video-4.mp4",
  "../public/videos/video-5.mp4",
  "../public/videos/video-6.mp4",
  "../public/videos/video-7.mp4",
  "../public/videos/video-8.mp4",
  "../public/videos/video-9.mp4",
  "../public/videos/video-6.mp4",
  "../public/videos/video-7.mp4",
  "../public/videos/video-1.mp4",
  "../public/videos/video-2.mp4",
];

function App() {

  return (
    <>
      <HeroSection />
      <TopProduct />
      <div className="banner">
        <div className="outer-container">
          <img className='bg-img' src="../public/bg.png" alt="" />
          <div className="container">
            <div className="content">
              <div className="image-section">
                <img
                  src="../public/cookies/cookie-4.png" 
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
                  <li><strong>Price:</strong> $5.99</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromiseSection />
      <GridMotion items={items} />
    </>
  )
}

export default App