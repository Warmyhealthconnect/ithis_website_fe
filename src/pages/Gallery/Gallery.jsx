import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Gallery.css'

// 1. Define the image data
const galleryImages = [
  { src: "/gallerypage/iet College.jpg", label: "iet College" },
  { src: "/gallerypage/iet College2.jpg", label: "iet College" },
  { src: "/gallerypage/iet Girls hostel.jpg", label: "iet Girls hostel" },
  { src: "/gallerypage/iet Computer lab.png", label: "iet Computer lab" },
  { src: "/gallerypage/iet Library.jpg", label: "iet Library" },
  { src: "/gallerypage/iet College3.jpg", label: "iet College" },
  { src: "/gallerypage/iet Men’s hostel.jpg", label: "iet Men's hostel" },
  { src: "/gallerypage/iet College4.jpg", label: "iet College" },
];


function Gallery() {
  return (
    <>
      <Banner page={"Facilities"} />

      {/* 2. Apply Grid to this container */}
      <div className="gallery-container">

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            // Custom card structure for the image and label overlay
            <div className="gallery-card" key={index}>
              <img src={image.src} alt={image.label} className="card-image" />
              <div className="card-label">
               <p>{image.label}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery