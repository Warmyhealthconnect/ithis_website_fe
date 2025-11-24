import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Admission.css'
import Banner from '../../Components/Banner/Banner'
import { addAdmissionApi } from '../../../services/allApis'


function Admission() {

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        dob: "",
        gender: "",
        address: "",
        aadhar: "",
        email2: "",
        bloodgroup: "",
        nationality: "",
        caste: "",
        category: "",
        course: "",
        qualification: "",
        lastInstitute: "",
        qualificationState: "",
        passingYear: "",
        registerNumber: "",
        englishMarks: "",
        chemistryMarks: "",
        physicsMarks: "",
        biologyMarks: "",
        totalMarks: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await addAdmissionApi(formData);
            console.log("Admission submitted:", result);
            alert("Form submitted successfully!");

            // Reset form
            setFormData({
                name: "",
                mobile: "",
                email: "",
                dob: "",
                gender: "",
                address: "",
                aadhar: "",
                email2: "",
                bloodgroup: "",
                nationality: "",
                caste: "",
                category: "",
                course: "",
                qualification: "",
                lastInstitute: "",
                qualificationState: "",
                passingYear: "",
                registerNumber: "",
                englishMarks: "",
                chemistryMarks: "",
                physicsMarks: "",
                biologyMarks: "",
                totalMarks: ""
            });

        } catch (err) {
            console.error("Error submitting form:", err);
            alert("Something went wrong!");
        }
    };

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
                            At Ithis Medicity Nursing College, we welcome passionate learners into a supportive and inspiring community committed to excellence in healthcare education. Our programs integrate strong academic foundations, hands-on clinical training, and compassionate values to develop skilled and empathetic nursing professionals. Guided by experienced faculty and equipped with modern facilities, students grow into confident caregivers prepared to serve with integrity, humanity, and purpose in the global healthcare environment. Here, every student is encouraged to recognize their strengths, embrace their calling, and pursue their goals with confidence. We strive to shape not only competent professionals but compassionate individuals dedicated to making a meaningful difference in the lives of others
                        </p>
                    </div>

                    <div className="img-container"></div>
                </div>

                {/* Right Form Column */}
                <div className="col form-column">
                    <div className="form-wrapper">

                        <form className="form-content" encType="multipart/form-data">

                            {/* ------------------- BASIC DETAILS ------------------- */}

                            <h3>Basic Details</h3>

                            <div className="row-inputs">
                                <label>
                                    Student Name
                                    <input type="text" name="name" required />
                                </label>

                                <label>
                                    Mobile
                                    <input type="text" name="mobile" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Email
                                    <input type="email" name="email" required />
                                </label>

                                <label>
                                    Date of Birth
                                    <input type="date" name="dob" required />
                                </label>
                            </div>

                            <div className="row-inputs gender-row">
                                <label className="gender-label d-block text-center mb-2">Gender</label>

                                <div className="gender-options d-flex justify-content-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"

                                        // checked={details.basicDetails.gender === "Male"}
                                        />
                                        Male
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"

                                        // checked={details.basicDetails.gender === "Female"}
                                        />
                                        Female
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Other"

                                        // checked={details.basicDetails.gender === "Other"}
                                        />
                                        Other
                                    </label>
                                </div>
                            </div>



                            <div className="row-inputs">
                                <label>
                                    Aadhar Number
                                    <input type="text" name="aadharNumber" required />
                                </label>
                                <label>
                                    Religion
                                    <input type="text" name="religion" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Blood Group
                                    <select name="bloodGroup" required >
                                        <option value=""></option>
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="O+">O+</option>
                                        <option value="AB+">AB+</option>
                                    </select>
                                </label>

                                <label>
                                    Nationality
                                    <select name="nationality" required >
                                        <option value=""></option>
                                        <option value="Indian">Indian</option>
                                        <option value="NRI">NRI</option>
                                    </select>
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Caste and category
                                    <input type="text" name="casteCategory" required />
                                </label>
                            </div>

                            {/* Passport Photo */}
                            <div className="row-inputs">
                                <label className="full-width">
                                    Upload Passport Size Photo
                                    <input type="file" name="studentphoto" required />
                                </label>
                            </div>


                            {/* ------------------- PARENT DETAILS ------------------- */}

                            <h3>Parent / Guardian Details</h3>

                            <div className="row-inputs">
                                <label>
                                    Parent Full Name
                                    <input type="text" name="parentName" required />
                                </label>

                                <label>
                                    Relationship
                                    <input type="text" name="relationship" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Guardian Mobile
                                    <input type="text" name="guardianMobile" required />
                                </label>

                                <label>
                                    Parent Email
                                    <input type="email" name="parentEmail" required />
                                </label>
                            </div>


                            {/* ------------------- ADDRESS ------------------- */}

                            <h3>Present Address</h3>

                            <div className="row-inputs">
                                <label>
                                    House / Flat No
                                    <input type="text" name="houseName" required />
                                </label>

                                <label>
                                    Street / Lane
                                    <input type="text" name="street" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label className="full-width">
                                    Landmark (Optional)
                                    <input type="text" name="landmark" />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    District
                                    <input type="text" name="district" required />
                                </label>

                                <label>
                                    State
                                    <input type="text" name="state" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Pincode
                                    <input type="text" name="pincode" required />
                                </label>

                                <label>
                                    Mobile
                                    <input type="text" name="addressmobile" required />
                                </label>
                            </div>


                            {/* ------------------- EDUCATIONAL DETAILS ------------------- */}

                            <h3>Educational Details</h3>

                            <div className="row-inputs">
                                <label>
                                    Institution & State
                                    <input type="text" name="institutionAndState" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Year of Passing
                                    <input type="number" name="yearOfPassing" required />
                                </label>

                                <label>
                                    Register Number
                                    <input type="text" name="registerNumber" required />
                                </label>
                            </div>

                            <h4>Marks Obtained</h4>

                            <div className="marks-section">
                                <div className="marks-row">
                                    <label>Chemistry</label>
                                    <input type="number" name="chemistry" required />
                                </div>

                                <div className="marks-row">
                                    <label>Physics</label>
                                    <input type="number" name="physics" required />
                                </div>

                                <div className="marks-row">
                                    <label>English</label>
                                    <input type="number" name="english" required />
                                </div>

                                <div className="marks-row">
                                    <label>Biology or equivalent</label>
                                    <input type="number" name="biologyOrEquivalent" required />
                                </div>

                                <div className="marks-row">
                                    <label>Total</label>
                                    <input type="number" name="total" required />
                                </div>
                            </div>

                            <h4>Applying Course</h4>

                            <label>
                                <select name="bloodGroup" required >
                                    <option value="" disabled hidden>Select a course</option>
                                    <option value="A+">Bsc Nursing</option>
                                    <option value="B+">D Pharm</option>
                                    <option value="O+">ANM</option>
                                    <option value="AB+">GNM</option>
                                </select>
                            </label>

                            {/* ------------------- DOCUMENTS ------------------- */}

                            <h3>Required Documents (PDF Only)</h3>

                            <div className="row-inputs">
                                <label className="full-width">
                                    SSLC / Age Proof (PDF)
                                    <input type="file" accept=".pdf" name="sslcProof" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label className="full-width">
                                    Plus Two Certificate (PDF)
                                    <input type="file" accept=".pdf" name="plusTwoCertificate" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label className="full-width">
                                    Signature (PDF)
                                    <input type="file" accept=".pdf" name="signatures" required />
                                </label>
                            </div>

                            {/* ------------------- DECLARATION ------------------- */}

                            <h3>Declaration by the Applicant</h3>

                            <div className="declaration-section">
                                <label className="declaration-label d-block mb-2">
                                    <input
                                        type="checkbox"
                                        name="prospectusAgreement"
                                        required

                                    // checked={details.declaration?.prospectusAgreement || false}
                                    />
                                    I hereby declare that I have read the various clauses in the prospectus for admission to BSc Nursing course & the instructions carefully & I agree to abide by them
                                </label>

                                <label className="declaration-label d-block">
                                    <input
                                        type="checkbox"
                                        name="truthDeclaration"
                                        required

                                    // checked={details.declaration?.truthDeclaration || false}
                                    />
                                    I also declare that all statements in the application are true, complete & correct to the best of my knowledge & belief
                                </label>
                            </div>


                        </form>



                        {/* Submit Button */}
                        <div className="form-button">
                            <button type="submit" className="btn btn-light" >
                                Submit Application
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Admission