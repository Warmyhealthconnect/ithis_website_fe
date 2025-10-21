import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadeStart = 0;       // start fading at top
      const fadeEnd = 400;       // fully faded after 400px scroll
      const newOpacity = 1 - scrollTop / fadeEnd;
      setOpacity(newOpacity < 0 ? 0 : newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>

      <div className="parallax-container">

        {/* Parallax Banner */}
        <section className="parallax-banner">
          <video autoPlay loop muted playsInline className="parallax-video" src="/videos/ithis.mp4" />
          <div className="banner-text" style={{ opacity }}>
            <h1>CENTER OF <br />EXCELLENCE FOR <br />NURSING EDUCATION</h1>
            <p>a world where knowledge meets kindness, science meets service, <br />and learning becomes a lifelong commitment to humanity.</p>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className='scrollable_section'>
          <div className="logo-background">
            <section className='home_section_1'>
              <div>
                <h6>Ithis Medicity</h6>
                <h1>Ithis Medicity Empowering Future Leaders in <br /> Healthcare Through Excellence and Integrity</h1>
              </div>
            </section>
            <section className='home_section_2'>
              <div className="row">
                <div className="col-5">
                  1
                </div>
                <div className="col-7">
                  <h4>Ithis Nursing College, established in 2025, is a leading institution dedicated to advancing nursing education and healthcare excellence in Kerala.
                    The college aims to nurture skilled, compassionate, and ethical nursing professionals who can meet the evolving demands of the healthcare industry
                  </h4>
                </div>
              </div>
            </section>
          </div>
        </section>




      </div>

    </>
  )


}

export default Home