import "./HeroSection.css"
import Nav from './Nav'


function HeroSection() {
    return (
        <div className="hero-section">
            <video
                autoPlay muted loop
                src="https://static.vecteezy.com/system/resources/previews/004/871/644/mp4/close-up-pouring-chocolate-sauce-on-top-whipped-cream-after-the-whipped-cream-starts-to-melt-on-the-white-background-free-video.mp4"
                type="video/mp4">
            </video>
            <Nav />
            <div className='heading'>
                <h1>100% natural</h1>
                <h1>homemade</h1>
                <h1>fresh cake</h1>
            </div>
            <span className='note'>chocolate make everything better</span>
        </div>
    )
}

export default HeroSection
