import React, { useEffect, useState, useRef } from 'react'
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

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        console.log("Autoplay prevented, user interaction required");
      });
    }
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
      color: "white",
      background: "var(--main-color)"
    },
    {
      name: "Undergraduate Programs",
      para: "Ithis Medicityprovides D.Pharm and B.Sc Nursing programs, combining comprehensive theoretical knowledge",
      logo: "/homepage/undergraduate.png",
      color: "black",
      background: "#F5F5F5"
    },
    {
      name: "Faculty & Staff",
      para: "Our faculty members are distinguished professionals, educators, and researchers dedicated to academic excellence and mentorship.",
      logo: "/homepage/faculity.png",
      color: "black",
      background: "#D2DCE9"
    },
    {
      name: "Infrastructure",
      para: "Our campus is equipped with advanced technology and a comfortable learning environment to support education, research, and community engagement.",
      logo: "/homepage/infra.png",
      color: "black",
      background: "#F5F5F5"
    },
  ]


  return (
    <>

      <div className="parallax-container">

        {/* Parallax Banner */}
        <section className="parallax-banner">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="parallax-video"
          >
            <source src="/videos/ithis.webm" type="video/webm" />
            <source src="/videos/ithis.mp4" type="video/mp4" />
          </video>
          <div className="banner-text" style={{ opacity }}>
            <h1>CENTER OF EXCELLENCE <br /> FOR NURSING EDUCATION</h1>
            <p>a world where knowledge meets kindness, science meets service, <br />and learning becomes a lifelong commitment to humanity.</p>
          </div>
        </section>

        <section className='broadcast-section'>
          <p className='broadcast-text'>News and Announcements</p>
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
                      <button className="know_more">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className='principal-section'>
              <div className="principal-text-section">
                <p>It is with immense pride and joy that I welcome you to lET College of Nursing, Malappuram - a center of excellence committed to shaping the future guardians
                  of health and healing. Nursing is not just a career; it is a calling of compassion and courage, where knowledge meets kindness and care becomes a sacred duty.
                  At IET, we inspire our students to grow into skilled, confident, and value-oriented professionals who can serve humanity with dedication and dignity</p>
                <div className='ithis-logo'>
                  <img src="/footerLogo.png" className='img-fluid' alt="" />
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

              <div className="row course-cards-container">
                {
                  course.map(item => (
                    <div className='col course-card shadow'>
                      <img src={item.image} className='img-fluid course-card-img' alt="" />
                      <div className="card-overlay">{item.name}</div>
                    </div>
                  ))
                }

              </div>
            </section>

            <section className='home_section_3 '>
              <h1 className='text-start mx-3 my-4'>Facilities</h1>
              <div className='home_sec_3_container row mx-3'>
                <div className="col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/Homeimages/library.png" className='' alt="" />
                  <h3 className='py-4'>Library</h3>
                  <h5 className='pb-4'>The College has a spacious library with books, journals, periodicals etc. It has a seperate references sections for both students and faculties 
                    Internet facilities is also provided in refernces sections </h5>
                  <button className="know_more">Explore More</button>
                </div>
                <div className="home_3_center_div col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/Homeimages/computer.png" className='' alt="" />
                  <h3 className='py-4'>Computer Facilities</h3>
                  <h5 className='pb-4'>A computer lab has been set up for providing knowledge to the students. Computer facilities give the students ample opportunities for learning the system and practise. internet facilities 
                    is also provided
                  </h5>
                  <button className="know_more">Explore More</button>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/Homeimages/hostel.png" className='' alt="" />
                  <h3 className='py-4'>Hostel</h3>
                  <h5 className='pb-4'>There are seperate hostels for boys and girls .The Girls Hostel is being located in the campus. The hostel amenities and educational facilities are 
                    helping the students for leading a balanced life of study and leisure.
                  </h5>
                  <button className="know_more">Explore More</button>
                </div>
              </div>
            </section>

            <section className='home_section_4 '>
              <div className="row py-5">
                <div className="col">
                  <img src="/Homeimages/ietcop-2048x896.png" alt="Logo" className="circular-img" />
                  <h5 className='py-3'>iet College of Pharmacy</h5>
                </div>
                <div className="col">
                  <img src="/Homeimages/iet-institute-of-allied-health-science-logo.png" alt="Logo" className="circular-img" />
                  <h5 className='py-3'>iet Institute of Allied Health Science</h5>
                </div>
                <div className="col">
                  <img src="/Homeimages/ithis_hospital.png" alt="Logo" className="circular-img px-4" />
                  <h5 className='py-3'>iet hospital</h5>
                </div>
              </div>
            </section>

            <section className='why-choose-us-section'>
              <div className="why-choose-text">
                <h1>Why Choose Ithis</h1>
              </div>

              <div className="why-choose-box-container">
                {
                  whychoose.map(item => (
                    <div className="why-choose-box" style={{ backgroundColor: item.background, color: item.color }}>
                      <div className="why-choose-icon">
                        <img src={item.logo} width={'12%'} alt="" />
                      </div>
                      <h2>{item.name}</h2>
                      <p style={{ color: item.color }}>
                        {item.para}
                      </p>
                    </div>
                  ))
                }

              </div>
            </section>
          </div>
        </section>

      </div>

    </>
  )


}

export default Home