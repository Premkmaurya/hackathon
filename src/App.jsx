import React from 'react'
import Nav from '../src/components/Nav'

function App() {
  return (
    <>
      <div className="hero-section">
        <video
          autoPlay muted loop
          src="https://static.vecteezy.com/system/resources/previews/004/871/644/mp4/close-up-pouring-chocolate-sauce-on-top-whipped-cream-after-the-whipped-cream-starts-to-melt-on-the-white-background-free-video.mp4"
          type="video/mp4">
        </video>
        <Nav />
        <div className='heading'>
          <span>
            <h1>100% natural</h1>
            <h1>homemade</h1>
          </span>
          <span>
            <h1>fresh cookie</h1>
          </span>
        </div>
      </div>
    </>
  )
}

export default App