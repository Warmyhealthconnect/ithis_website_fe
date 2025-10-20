import React from 'react'
import './Banner.css'
import { Link, useLocation } from 'react-router-dom'

function Banner({ page }) {
  const location = useLocation();
  const pagenavbar = location.pathname.replace('/', '') || 'Home';
  const formattedPage = pagenavbar.charAt(0).toUpperCase() + pagenavbar.slice(1);

  return (
    <div className='banner-container'>
      <div className='banner-contents'>
        <h1 className='heading'>{page}</h1>

        <div className="banner-button">
          <Link className='home-btn' to='/' aria-label='home'>
            <i className="fa-solid fa-house" aria-hidden="true"></i>
          </Link>

          <span className='breadcrumb-arrow' aria-hidden="true">
            <i className="fa-solid fa-angle-right"></i>
          </span>

          <span className='breadcrumb-text'>{formattedPage}</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
