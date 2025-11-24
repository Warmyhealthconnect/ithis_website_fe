import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Facilities.css'

function Facilities() {
  const faciliimages = [
    {
      img: './facilities/computerlab.png',
      title: 'Computer Lab'
    },
    {
      img: './facilities/library.jpg',
      title: 'Library'
    },
    {
      img: './facilities/hostel.jpg',
      title: 'Hostel'
    },
  ]
  return (
    <>

      <Banner page={'Facilities'} />

      <section className="facilities-section">
        {faciliimages.map(item => (
          <div className="facility-card">
            <img src={item.img} alt="Computer Lab" className="facility-image" />

            <div className="facility-title">
              {item.title}
            </div>
          </div>
        ))

        }
      </section>


    </>
  )
}

export default Facilities