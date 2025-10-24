import { Link } from "react-router-dom";
import './Header.css';
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [isLightNav, setIsLightNav] = useState(false); // Track scroll color mode

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
  };

  return (
    <>
      <div className="header-container">
        <div className="header-contents">

          {/* Logo */}
          <div className="header-logo">
            <Link to="/">
              <img
                src={isLightNav ? "/ithislogoblue.png" : "/footerLogo.png"}
                alt="Ithis Medicity Logo"
                width="150"
                style={{ transition: '0.3s ease all' }}
              />
            </Link>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen((s) => !s)}>
            {menuOpen ? (
              <FiX size={34} color={isLightNav ? "#000" : "#fff"} />
            ) : (
              <RiMenu3Fill size={26} color={isLightNav ? "#000" : "#fff"} />
            )}
          </button>

          {/* Nav Links (desktop) */}
          <div className="header-links">
            <ul className="link-lists">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>

              <li className="dropdown">
                <Link to="#">Course</Link>
                <div className="dropdown-menu">
                  <ul className="dropdown-column">
                    <li><Link to="/bscnursing">BSC Nursing</Link></li>
                    <li><Link to="/dpharm">D Pharm</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link to="/gallery">Facilities</Link></li>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Apply Button */}
          <div className="apply-button">
            <button className="btn">Apply Now</button>
          </div>
        </div>
      </div>

      {/* Sidebar (mobile) */}
      <div className={`sidebar-overlay ${menuOpen ? "visible" : ""}`} onClick={() => setMenuOpen(false)} />
      <aside className={`sidebar-drawer ${menuOpen ? "open" : ""}`} role="navigation" aria-hidden={!menuOpen}>
        <div className="sidebar-top">
          <div className="sidebar-logo">
            <Link to="/" onClick={handleNavClick}>
              <img src="/ithislogoblue.png" alt="Ithis Medicity" width="120" />
            </Link>
          </div>
          <button className="sidebar-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavClick}>About</Link></li>

            <li className="sidebar-course">
              <button
                className="mobile-course-toggle"
                onClick={() => setMobileCourseOpen((s) => !s)}
                aria-expanded={mobileCourseOpen}
              >
                Course
                <span className={`chev ${mobileCourseOpen ? "open" : ""}`}></span>
              </button>

              <ul className={`sidebar-sublist ${mobileCourseOpen ? "open" : ""}`}>
                <li><Link to="/bscnursing" onClick={handleNavClick}>BSC Nursing</Link></li>
                <li><Link to="/dpharm" onClick={handleNavClick}>D Pharm</Link></li>
              </ul>
            </li>

            <li><Link to="/gallery" onClick={handleNavClick}>Facilities</Link></li>
            <li><Link to="/admission" onClick={handleNavClick}>Admission</Link></li>
            <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>

            <li className="sidebar-apply">
              <button className="btn" onClick={() => handleNavClick()}>Apply Now</button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
