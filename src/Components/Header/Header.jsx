import { Link } from "react-router-dom"
import './Header.css'
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const header = document.querySelector(".header-container");

    const handleScroll = () => {
      // get the height of the first dark section (e.g., video banner)
      const firstSection = document.querySelector(".video-section");
      const triggerHeight = firstSection ? firstSection.offsetHeight - 50 : 500;

      if (window.scrollY > triggerHeight) {
        header.classList.add("light-nav");
      } else {
        header.classList.remove("light-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="header-container">
      <div className="header-contents">

        {/* Nav Links */}
        <div className="header-links">
          <ul className="link-lists">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            {/* COURSE DROPDOWN */}
            <li className="dropdown">
              <Link to="#">Course</Link>

              {/* Dropdown menu */}
              <div className="dropdown-menu">
                <ul className="dropdown-column">
                  <li><Link to="/bscnursing">BSC Nursing</Link></li>
                  <li><Link to="/dpharm">D Pharm</Link></li>
                </ul>
              </div>
            </li>

            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        {/* Apply Button */}
        <div className="apply-button">
          <button className="btn">Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default Header
