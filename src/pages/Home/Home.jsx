import React from 'react'
import './Home.css'

function Home() {
  return (
    <>

      <section className='video-section p-5'>
        <video autoPlay loop muted playsInline className='bg-video' src="/videos/ithis.mp4"></video>
        <div className='heading-groups'>
          <div className='main-heading'>
            <h1>CENTER OF EXCELLENCE FOR NURSING EDUCATION</h1>
          </div>
          <div className='sub-heading'>
            <p>a world where knowledge meets kindness, science meets service, and learning becomes a lifelong commitment to humanity.</p>
          </div>
        </div>
      </section>

      <section className='broadcast-section'></section>

      <section className='mt-5 mb-5'></section>


    </>
  )
  
}

export default Home