import React from 'react';
import './About.css'
import Banner from '../../Components/Banner/Banner';

function About() {
  return (
    <>
        <Banner page={'About Us'}/>



      <section className="container my-5">
        <div className="desc_container row justify-content-between align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <h3 className="fw-bold fs-2 mb-3 text-center text-md-start py-4">
              About Ithis Medicity Nursing College
            </h3>
            <p className="fs-5 lh-lg text-muted text-center text-md-start">
              At Ithis Medicity Nursing College, we are dedicated to shaping future healthcare professionals with excellence
              and compassion. Our institution offers a vibrant learning environment that blends theory with real-world practice.
              With modern infrastructure and advanced simulation labs, students receive world-class training and guidance. Experienced faculty ensure every learner
              gains the confidence and skills to excel in nursing. We focus on ethics, empathy, and leadership — the true essence of nursing care. Through innovation and dedication,
              we prepare nurses who make a difference. Join us, where education meets excellence and passion becomes purpose.
            </p>
          </div>
          {/* Image Section */}
          <div className="img_container col-12 p-2 col-md-4 text-center">
            <img
              src="/Aboutimages/image1.png"
              className="img-fluid rounded-4 shadow-sm"
              alt="About Ithis Medicity Nursing College"
            />
          </div>
        </div>
      </section>

      <section className="border pt-5 position-relative" style={{ overflow: "visible" }}>
        <div className="vision-container row " >
          {/* First column */}
          <div className=" col-sm d-flex align-items-center justify-content-center text-white">
            <div className='vision_card'>
              <h3>Our Mission</h3>
              <p>To deliver high-quality nursing education that integrates scientific knowledge, clinical expertise, and compassionate care. We aim to empower our students to become skilled, ethical, and confident healthcare professionals who make a meaningful impact in their communities. </p>
            </div>
          </div>

          {/* Second column */}
          <div className="col-sm d-flex align-items-center justify-content-center text-white">
            <div className='vision_card'>
              <h3>Our Vision</h3>
              <p>To be a leading institution recognized for academic excellence, innovation, and human-centered nursing education — nurturing professionals who inspire trust, uphold integrity, and transform healthcare globally.</p>
            </div>
          </div>

          {/* Third column — image lifted above section */}
          <div className=" col d-flex align-items-center justify-content-center position-relative" style={{ overflow: "visible" }}> 
            <img src="/Aboutimages/nurse_img.png" className="img-fluid position-absolute start-50 translate-middle-x" style={{top: "-85px",height: "120%", zIndex: 10,}} alt="nurse"/>
          </div>
        </div>
      </section>



    </>
  );
}

export default About;
