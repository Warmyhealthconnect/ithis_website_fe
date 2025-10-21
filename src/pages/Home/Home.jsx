import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

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
            <section className='home_section_2 '>
              <div className="row justify-content-between px-3 py-4">
                <div className="col-5">
                  <img src="/Homeimages/home_section_2_img.png" className='img-fluid' alt="" />
                </div>
                <div className="col-6 d-flex flex-column justify-content-between">
                  <h4>Ithis Nursing College, established in 2025, is a leading institution dedicated to advancing nursing education and healthcare excellence in Kerala.
                    The college aims to nurture skilled, compassionate, and ethical nursing professionals who can meet the evolving demands of the healthcare industry
                  </h4>
                  <div className="d-flex justify-content-start">
                    <Link to="/about">
                      <button className="apply-btn btn rounded-pill me-4">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className='home_section_3 '>
              <h2 className='text-start mx-3'>Facilities</h2>
              <div className='home_sec_3_container row mx-3'>
                <div className="col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/public/Homeimages/library.png" className='' alt="" />
                  <h3 className='py-4'>Library</h3>
                  <h5 className='pb-4'>Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge </h5>
                  <button className="apply-btn btn rounded-pill me-4">Explore More</button>
                </div>
                <div className="home_3_center_div col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/public/Homeimages/computer.png" className='' alt="" />
                  <h3 className='py-4'>Computer Facilities</h3>
                  <h5 className='pb-4'>Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge </h5>
                  <button className="apply-btn btn rounded-pill me-4">Explore More</button>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/public/Homeimages/hostel.png" className='' alt="" />
                  <h3 className='py-4'>Hostel</h3>
                  <h5 className='pb-4'>Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge </h5>
                  <button className="apply-btn btn rounded-pill me-4">Explore More</button>
                </div>
              </div>
            </section>
            <section className='home_section_4 '>
              <div className="row py-5">
                <div className="col">
                  <img src="/Homeimages/ietcop-2048x896.png" alt="Logo" className="circular-img"/>
                  <h5 className='py-3'>iet College of Pharmacy</h5>
                </div>
                <div className="col">
                  <img src="/public/Homeimages/iet-institute-of-allied-health-science-logo.png" alt="Logo" className="circular-img"/>
                  <h5 className='py-3'>iet College of Pharmacy</h5>
                </div>
                <div className="col">
                  <img src="/public/Homeimages/ithis_hospital.png" alt="Logo" className="circular-img px-4"/>
                  <h5 className='py-3'>iet College of Pharmacy</h5>
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