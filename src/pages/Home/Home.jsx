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

  const course = [
    {
      name: "D Pharm",
      image: "/homepage/dpharm.png"
    },
    {
      name: "BSC Nursing",
      image: "/homepage/bsc.png"
    },
  ]

  const whychoose = [
    {
      name: "Graduate Programs",
      para: "Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge",
      logo: "/homepage/graduate.png",
      color:"white",
      background:"var(--main-color)"
    },
    {
      name: "Undergraduate Programs",
      para: "Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge",
      logo: "/homepage/undergraduate.png",
      color:"black",
      background:"#F5F5F5"
    },
    {
      name: "Graduate Programs",
      para: "Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge",
      logo: "/homepage/faculity.png",
      color:"black",
      background:"#D2DCE9"
    },
    {
      name: "Graduate Programs",
      para: "Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge",
      logo: "/homepage/infra.png",
      color:"black",
      background:"#F5F5F5"
    },
  ]

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

        <section className='broadcast-section'>
          <p className='broadcast-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorum ipsum, asperiores enim quia voluptas veniam, deleniti perferendis perspiciatis facilis natus distinctio doloribus aperiam quibusdam mollitia quis beatae debitis animi!</p>
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

        <section className='course-section'>
          <div className="course-section-txts">
            <h1>Courses</h1>
            <p>Ithis Medicityprovides D.Pharm and B.Sc Nursing
              programs, combining comprehensive theoretical
              knowledge with practical training to prepare
              students for successful careers in pharmacy
              and nursing</p>
          </div>

          <div className="course-cards-container">
            {
              course.map(item => (
                <div className='course-card'>
                  <img src={item.image} className='course-card-img' alt="" />
                  <div className="card-overlay">{item.name}</div>
                </div>
              ))
            }

          </div>
        </section>

        <section className='why-choose-us-section'>
          <div className="why-choose-text">
            <h1>Why Choose Ithis</h1>
          </div>

          <div class="why-choose-box-container">
            {
              whychoose.map(item => (
                <div className="why-choose-box" style={{ backgroundColor: item.background,color: item.color }}>
                  <div className="why-choose-icon">
                    <img src={item.logo} width={'12%'} alt="" />
                  </div>
                  <h2>Graduate Programs</h2>
                  <p style={{color: item.color}}>
                    Ithis Medicity provides D.Pharm and B.Sc Nursing programs, combining
                    comprehensive theoretical knowledge.
                  </p>
                </div>
              ))
            }

          </div>
        </section>

      </div>

    </>
  )


}

export default Home