import { Link } from "react-router-dom";
import './Header.css';
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [isLightNav, setIsLightNav] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header-container");

    const handleScroll = () => {
      const firstSection = document.querySelector(".video-section");
      const triggerHeight = firstSection ? firstSection.offsetHeight - 50 : 500;

      if (window.scrollY > triggerHeight) {
        header.classList.add("light-nav");
        setIsLightNav(true);
      } else {
        header.classList.remove("light-nav");
        setIsLightNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setMobileCourseOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <div className="header-container">
        <div className="header-contents">

          <div className="header-logo">
            <Link to="/">
              <img
                src={isLightNav ? "/ithislogoblue.png" : "/footerLogo.png"}
                alt="Ithis Medcity"
                width="150"
                className="img-fluid"
                style={{ transition: "0.3s ease all" }}
              />
            </Link>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX size={34} color={isLightNav ? "#000" : "#fff"} />
            ) : (
              <RiMenu3Fill size={26} color={isLightNav ? "#000" : "#fff"} />
            )}
          </button>

          <div className="header-links">
            <ul className="link-lists">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>

              <li className="dropdown">
                <Link to="#">Course</Link>
                <div className="dropdown-menu">
                  <ul className="dropdown-column">
                    <li><Link to="/bscnursing" onClick={() => window.scrollTo(0, 0)}>BSC Nursing</Link></li>
                    <li><Link to="/dpharm" onClick={() => window.scrollTo(0, 0)}>D Pharm</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="apply-button">
            <Link to="/admission" className="btn">Apply Now</Link>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar-overlay ${menuOpen ? "visible" : ""}`} onClick={() => setMenuOpen(false)} />

      <aside className={`sidebar-drawer ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="sidebar-logo">
            <Link to="/" onClick={handleNavClick}>
              <img src="/ithislogoblue.png" width="120" alt="Ithis Medcity" />
            </Link>
          </div>
          <button className="sidebar-close" onClick={() => setMenuOpen(false)}>×</button>
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            <li><Link className="sidebar-links" to="/" onClick={handleNavClick}>Home</Link></li>
            <li><Link className="sidebar-links" to="/about" onClick={handleNavClick}>About</Link></li>

            <li className="sidebar-course">
              <button
                className="mobile-course-toggle"
                onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
              >
                Course
                <span className={`chev ${mobileCourseOpen ? "open" : ""}`}></span>
              </button>

              <ul className={`sidebar-sublist ${mobileCourseOpen ? "open" : ""}`}>
                <li><Link className="sidebar-links" to="/bscnursing" onClick={handleNavClick}>BSC Nursing</Link></li>
                <li><Link className="sidebar-links" to="/dpharm" onClick={handleNavClick}>D Pharm</Link></li>
              </ul>
            </li>

            <li><Link className="sidebar-links" to="/facilities" onClick={handleNavClick}>Facilities</Link></li>
            <li><Link className="sidebar-links" to="/gallery" onClick={handleNavClick}>Gallery</Link></li>
            <li><Link className="sidebar-links" to="/admission" onClick={handleNavClick}>Admission</Link></li>
            <li><Link className="sidebar-links" to="/career" onClick={handleNavClick}>Career</Link></li>
            <li><Link className="sidebar-links" to="/contact" onClick={handleNavClick}>Contact</Link></li>

            <li className="sidebar-apply">
              <Link  className="btn" to="/admission" onClick={handleNavClick}>Apply Now</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
