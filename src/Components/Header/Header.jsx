import { Link } from "react-router-dom"
import './Header.css'

function Header() {
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

            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/admission">Admission</Link></li> 
            <li><Link to="/gallery">Gallery</Link></li>
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
