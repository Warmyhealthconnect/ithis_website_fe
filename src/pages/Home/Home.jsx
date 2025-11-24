import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { getLatestNewsApi } from '../../../services/allApis';


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
    getLatestNews()
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // console.log("Autoplay prevented, user interaction required");
      });
    }
  }, []);

  const [news, setNews] = useState([])

  const getLatestNews = async () => {
    const res = await getLatestNewsApi()
    setNews(res.data)
  }




  const course = [
    {
      name: "D Pharm",
      image: "/homepage/dpharm.png",
      link: '/dpharm'
    },
    {
      name: "BSC Nursing",
      image: "/homepage/bsc.png",
      link: '/bscnursing'
    },
  ]


  const whychoose = [
    {
      name: "Graduate Programs",
      para: "In order to have a significant impact on healthcare, our graduate programs assist students in developing advanced skills, self-assurance, and compassion.",
      logo: "/homepage/graduate.png",
      color: "white",
      background: "var(--main-color)"
    },
    {
      name: "Undergraduate Programs",
      para: "Our programs shape enthusiastic, skilled healthcare professionals through caring guidance, practical training, and strong academic support—helping students find purpose and build a meaningful future in healthcare.",
      logo: "/homepage/undergraduate.png",
      color: "black",
      background: "#F5F5F5"
    },
    {
      name: "Faculty & Staff",
      para: "Our faculty and staff guide students with expertise, care, and real-world experience—helping them grow with confidence and compassion for a successful future in healthcare.",
      logo: "/homepage/faculity.png",
      color: "black",
      background: "#D2DCE9"
    },
    {
      name: "Infrastructure",
      para: "Our contemporary, friendly campus offers the facilities students require to study, practise and develop self-assurance.",
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
          </video>
          <div className="banner-text" style={{ opacity }}>
            <h1>CENTER OF <br /> EXCELLENCE FOR <br /> NURSING EDUCATION</h1>
            <p>a world where knowledge meets kindness, science meets service,and <br /> learning becomes a lifelong commitment to humanity.</p>
            <button className='mt-4 banner-btn'>Learn more</button>
          </div>
        </section>

        <section className='broadcast-section'>
          <p className='broadcast-text'>Alerts will be updated soon</p>
        </section>

        {/* Scrollable Content */}
        <section className='scrollable_section'>
          <div className="logo-background">
            <section className='home_section_1'>
              <div>
                <h6>Ithis Medicity</h6>
                <h1>Ithis Medicity: Creating Healthcare Heroes of <br /> the Future with Hope and Heart.</h1>
              </div>
            </section>
            <section className='home_section_2 '>
              <div className="row justify-content-between px-3 py-4">
                <div className="col-5">
                  <img src="/Homeimages/home_section_2_img.png" className='img-fluid' alt="" />
                </div>
                <div className="col-6 d-flex flex-column justify-content-around">
                  <h2 style={{ textAlign: "start" }}>Ithis Hospital and Ithis Nursing College stand as beacons of hope, healing, and heartfelt service in Kerala. The two are founded on the spirit of delivering compassionate care and taking part in building a future generation of healthcare professionals. Both work hand in hand in fulfilling their commitment to serving the community and redefining the meaning of excellence in healthcare.


                  </h2>
                  <div className="d-flex justify-content-start mt-5">
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
                <p>Through practical instruction and professional guidance, our B.Sc. Nursing and D.Pharm programs <br /> develop skilled, caring professionals.</p>
              </div>

              <div className="row course-cards-container">
                {
                  course.map(item => (
                    <Link className='col course-card shadow' to={item.link}>
                      <div onClick={() => window.scrollTo(0, 0)}>
                        <img src={item.image} className='img-fluid course-card-img' />
                        <div className="card-overlay">{item.name}</div>
                      </div>
                    </Link>

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
                  <h5 className='pb-4'>Our library is a peaceful, inspiring space filled with nursing books, journals, and digital resources. With comfortable seating and a calm atmosphere, it offers students the perfect place to study, explore, and grow in their academic journey.</h5>
                  <button className="apply-btn btn rounded-pill me-4">Explore More</button>
                </div>
                <div className="home_3_center_div col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/Homeimages/computer.png" className='' alt="" />
                  <h3 className='py-4'>Computer Facilities</h3>
                  <h5 className='pb-4'>Our modern computer lab offers high-speed systems, updated software, and a comfortable workspace—giving students the tools they need for research, digital learning, and skill development in a smooth, efficient environment.</h5>
                  <button className="apply-btn btn rounded-pill me-4">Explore More</button>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-evenly py-5">
                  <img src="/Homeimages/hostel.png" className='' alt="" />
                  <h3 className='py-4'>Hostel</h3>
                  <h5 className='pb-4'>Our hostel provides a secure, cosy, and welcoming environment for students to unwind, learn, and develop. It offers the ideal home away from home with spotless rooms, compassionate staff, and a tranquil setting.</h5>
                  <button className="apply-btn btn rounded-pill me-4">Explore More</button>
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
                  <h5 className='py-3'>ithis hospital</h5>
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
                    <div className="why-choose-box"
                      style={{ backgroundColor: item.background, color: item.color }}
                    >
                      <div className="why-choose-icon">
                        <img src={item.logo} width={'12%'} alt="" />
                      </div>

                      <h2>{item.name}</h2>

                      <p style={{ color: item.color, fontSize: '15px' }}>
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