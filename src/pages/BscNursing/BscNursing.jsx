import React from 'react';
import './BscNursing.css'
import Banner from '../../Components/Banner/Banner';
import Modalcomponent from '../../Components/Modal/Modalcomponent';

function BscNursing() {
    return (
        <>
            <Banner page={'BSc Nursing'} />

            <section className='bsc_section1'>
                <div className="row justify-content-between m-5">
                    <div className="col-7 ">
                        <h1>BSc Nursing</h1>
                        <h3 className='py-5'>B.Sc Nursing is a four-year program that combines theoretical knowledge and practical training to develop skilled, compassionate nurses ready to work in hospitals, clinics, and community health settings. It is not just a course, but a heartfelt journey where students learn to heal with both science and empathy. Every step in this program shapes them into caregivers who bring hope, comfort, and strength to those who need it most
                        </h3>
                        <div>
                            <button className="apply-btn btn rounded-pill  me-4">Apply now</button>
                            <Modalcomponent />
                        </div>
                    </div>
                    <div className="col-4  mb-4 download_div  text-white align-content-center px-5">
                        <h3>Download Syllabus</h3>
                        <p className='py-3'>Download the syllabus to explore the B.Sc. Nursing and discover your path to a rewarding nursing career.</p>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-info">
                            <td>4 year</td>
                            <td>11</td>
                            <td>Plus two with PCB combination minimum 50% mark</td>
                        </tr>
                    </tbody>
                </table>
            </section>


        </>
    );
}

export default BscNursing;
