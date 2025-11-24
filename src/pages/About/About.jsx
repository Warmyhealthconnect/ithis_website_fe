import React from 'react';
import './About.css'
import Banner from '../../Components/Banner/Banner';

function About() {
  return (
    <>
      <Banner page={'About Us'} />



      <section className="container my-5">
        <div className="desc_container row justify-content-between align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <h3 className="fw-bold fs-2 mb-3 text-center text-md-start py-4">
              About Ithis Medicity Nursing College
            </h3>
            <p className="fs-5 lh-lg text-muted text-center text-md-start">
              Knowledge, compassion, and purpose come together in this caring environment at Ithis Medicity Nursing College. Our goal is to develop competent, compassionate nurses who provide confident, empathetic care. Ithis Hospital's cutting-edge labs, contemporary classrooms, and practical clinical training give students practical experience that fortifies their hearts and abilities. Our committed faculty members patiently and passionately mentor each student, ensuring that they develop into responsible, caring adults. At Ithis, education is a journey of humanity, service, and making a positive impact on people's lives.
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
              <p>Our mission at Ithis is to heal with compassion, serve with integrity, and uplift every life we touch. We strive to provide trusted healthcare and nurturing education that inspire hope, restore strength, and shape caring professionals for the future. With every patient we comfort and every student we guide, we carry out our promise: treating each life with dignity, kindness, and heartfelt care.</p>
            </div>
          </div>

          {/* Second column */}
          <div className="col-sm d-flex align-items-center justify-content-center text-white">
            <div className='vision_card'>
              <h3>Our Vision</h3>
              <p>At Ithis Nursing College, our vision is to create a world where every nurse leads with compassion, confidence, and courage. We aspire to be a guiding light in nursing education—nurturing professionals who heal with heart, serve with dignity, and bring hope to every life they touch. We envision a future where our students become the strength of healthcare, spreading kindness, excellence, and humanity wherever they go.</p>
            </div>
          </div>

          {/* Third column — image lifted above section */}
          <div className=" col d-flex align-items-center justify-content-center position-relative" style={{ overflow: "visible" }}>
            <img src="/Aboutimages/nurse_img.png" className="img-fluid position-absolute start-50 translate-middle-x" style={{ top: "-85px", height: "120%", zIndex: 10, }} alt="nurse" />
          </div>
        </div>
      </section>



    </>
  );
}

export default About;
