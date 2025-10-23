import React from 'react'
import { Link } from 'react-router-dom'
import './Admission.css'
import Banner from '../../Components/Banner/Banner'


function Admission() {
    return (
        <>
            <Banner page={'Admission'} />

            <div className="row mx-auto px-4 my-5 admission-section">
                {/* Left Info Column */}
                <div className="col info-column">
                    <div className="admission-heading">
                        <h1>
                            Admissions at <span style={{ color: "#3E6FAC" }}>Ithis Medicity College</span>
                        </h1>
                    </div>

                    <div className="info-box">
                        <p>
                            At Ithis Medicity Nursing College, we welcome passionate learners to a
                            community dedicated to excellence in healthcare education. Our
                            comprehensive nursing programs combine academic rigor, hands-on clinical
                            experience, and compassionate care to prepare students for success in the
                            global healthcare field. With expert faculty and state-of-the-art
                            facilities, we empower future nurses to lead with skill, empathy, and
                            integrity.
                        </p>
                    </div>

                    <div className="img-container"></div>
                </div>

                {/* Right Form Column */}
                <div className="col form-column">
                    <div className="form-wrapper">
                        <form className="form-content">
                            <label className="input-box" htmlFor="name">
                                Name
                                <input type="text" id="name" name="name" />
                            </label>
                            <label className="input-box" htmlFor="mobile">
                                Mobile No
                                <input type="number" id="mobile" name="mobile" />
                            </label>
                            <label className="input-box" htmlFor="email">
                                Email
                                <input type="email" id="email" name="email" />
                            </label>
                            <label className="input-box" htmlFor="age">
                                Age
                                <input type="number" id="age" name="age" />
                            </label>
                            <label className="input-box" htmlFor="age">
                                Age
                                <input type="number" id="age" name="age" />
                            </label>
                            <label className="input-box" htmlFor="age">
                                Age
                                <input type="number" id="age" name="age" />
                            </label>
                            <label className="input-box" htmlFor="age">
                                Age
                                <input type="number" id="age" name="age" />
                            </label>
                            <label className="input-box" htmlFor="age">
                                Age
                                <input type="number" id="age" name="age" />
                            </label>
                            <label className="input-box" htmlFor="age">
                                Age
                                <input type="number" id="age" name="age" />
                            </label>
                            <label className="input-box" htmlFor="age">
                                Age
                                <input type="number" id="age" name="age" />
                            </label>
                            {/* Add more fields */}
                        </form>

                        {/* Fixed Submit Button */}
                        <div className="form-button">
                            <button type="submit" className="btn btn-light">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Admission