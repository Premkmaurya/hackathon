import "./About.css"
import Footer from '../components/Footer'
function About() {
  return (
    <>
    <div className="about-container">
      <h1>About Us</h1>     
       <div className="stats">
        <div className="stat-box purple">
          <span className="icon">👨‍🍳</span>
          <p>Founded in</p>
          <h2>2016</h2>
        </div>
        <div className="stat-box pink">
          <span className="icon">😊</span>
          <p>Kitchens</p>
          <h2>100+</h2>
        </div>
        <div className="stat-box yellow">
          <span className="icon">📍</span>
          <p>Cities</p>
          <h2>30+</h2>
        </div>
        <div className="stat-box blue">
          <span className="icon">🎁</span>
          <p>Unique Cakes</p>
          <h2>400</h2>
        </div>
      </div>
      <div className="about-main">
        <div className="about-text">
          <h3><strong>Founded in 2016 in Gurugram</strong>, Bakingo began with a simple belief: life is full of moments worth celebrating.</h3>
          <p>
            With 100+ kitchens spread across 30+ cities and a menu of over 400 unique cakes and desserts, we’ve grown into a brand that’s all about spreading joy, magic, and the spirit of never stopping wishing.
          </p>
          <p>
            From birthdays to anniversaries, to those quiet, everyday moments that deserve a little celebration, we’re here to remind you that every day holds a reason to believe in the magic of life.
          </p>
        </div>
        <div className="about-image">
          <img src="../../public/cookies/about-1.png" alt="Cake" />
        </div>
      </div>
      <div className="brand-section">
      <div className="brand-content">
        <div className="brand-text">
          <p className="tagline">We as a brand believe in the power of wishes.</p>
          <h1>Remember the days when you believed anything was possible?</h1>
          <p className="subtext">
            When dreams felt like they were within reach? We want to bring that sense of wonder back to your life.
            With every cake we create, we aim to spark joy and remind you that dreams do come true.
          </p>
          <p className="subtext">
            At the heart of our journey is constant innovation. Our in-house R&D centre helps us discover new
            flavours, reimagine classic desserts, and craft experiences that delight with every bite.
            This commitment to creativity and quality has not only won hearts but also earned us industry recognition,
            including winning the Swiggy Award for Best Dessert Brand — a milestone that sweetly affirms our mission.
          </p>
        </div>
        <div className="brand-image">
          <img
            src="../../public/cookies/about-2.png"
            alt="Colorful cakes with confetti"
          />
        </div>
      </div>
    </div>
    </div>
      <Footer />
      </>
  )
}

export default About
