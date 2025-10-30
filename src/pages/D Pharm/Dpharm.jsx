import React, { useState, useEffect } from 'react'
import './Dpharm.css'
import Banner from '../../Components/Banner/Banner'
import Modalcomponent from '../../Components/Modal/Modalcomponent'
import { getAllDpharmApi } from '../../../services/allApis'

function Dpharm() {

  useEffect(() => {
    getAllDpharm();
  }, []);

  const [dpharm, setDpharm] = useState([])

  const getAllDpharm = async () => {
    const res = await getAllDpharmApi()
    console.log(res)
    setDpharm(res.data)
  }
  return (
    <>

      <Banner page={"D Pharm"} />

      <section className='bsc_section1'>
        <div className="row justify-content-between m-5">
          <div className="col-7 ">
            <h1>D Pharm</h1>
            <h3 className='py-5'>
              D Pharm (Diploma in Pharmacy) is a two-year program that trains students in pharmaceutical sciences
              and practical skills like dispensing and drug management. Graduates can work in hospitals, pharmacies, industries, and regulatory sectors after registration.
            </h3>
            <div>
              <button className="apply-btn btn rounded-pill  me-4">Apply now</button>
              <Modalcomponent />
            </div>
          </div>
          <div className="col-4  mb-4 download_div  text-white align-content-center px-5">
            <h3>Download Syllabus</h3>
            <p className='py-3'>Download the syllabus to explore the D Pharm and discover your path to a rewarding nursing career.</p>
            <button className='download-btn'>Download</button>
          </div>
        </div>
      </section>

      <section className="course_table container-fluid">
        <table className="table text-center text-white">
          <thead className="bg-primary">
            <tr>
              <th>Duration</th>
              <th>Available Seat</th>
              <th>Eligibility</th>
              <th>Academic Control</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {dpharm.map(item => (
              <tr className="table-info">
                <td>{item.duration}</td>
                <td>{item.seat}</td>
                <td>{item.eligibility}</td>
                <td>{item.academiccontrol}</td>
                <td>{item.control}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>


    </>
  )
}

export default Dpharm