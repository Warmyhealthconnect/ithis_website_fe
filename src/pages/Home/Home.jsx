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

      <section className='broadcast-section'>
        <p className='broadcast-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorum ipsum, asperiores enim quia voluptas veniam, deleniti perferendis perspiciatis facilis natus distinctio doloribus aperiam quibusdam mollitia quis beatae debitis animi!</p>
      </section>

      <section className='principal-section'>
        <div className="principal-text-section">
          <p>It is with immense pride and joy that I welcome you to lET College of Nursing, Malappuram - a center of excellence committed to shaping the future guardians of health and healing. Nursing is not just a career; it is a calling of compassion and courage, where knowledge meets kind 4oss and care becomes a sacred duty. At IET, we inspire our students to grow into skilled, confident, and value-oriented professionals who can serve humanity with dedication and dignity</p>
          <div className='img-fluid ithis-logo'>
            <img src="/homepage/ithislogo.png" className='ithis-logo-img' alt="" />
          </div>
        </div>
        <div className="principal-img-section">
          <div className="principal-img-container">
          </div>
          <div className="principal-txt-grp">
            <h1>Dr Vilasini C</h1>
            <p>Principal. PHD(Nursing)</p>
            <p>IET College of Nursing Malappuram</p>
          </div>
        </div>
      </section>


    </>
  )

}

export default Home