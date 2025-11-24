import React, { useState } from "react";
import "./AdminDashboard.css";
import NewsSection from "../Components/NewsSection/NewsSection";
import DpharmSection from "../Components/DpharmSection/DpharmSection";
import BscNursingSection from "../Components/BscNursingSection/BscNursingSection";
import GallerySection from "../Components/GallerySection/GallerySection";
import StudentDetails from "../Components/StudentDetails/StudentDetails";
import Queries from "../Components/Queries/Queries";
import FeeEnquiry from "../Components/FeeEnquiry/FeeEnquiry";
import CareerSection from "../Components/CareerSection/CareerSection";
import AdmissionPage from "../Components/Admissionpage/AdmissionPage";
import AdmissionNursing from "../Components/Admissionnursing/AdmissionNursing";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("news");

  const renderSection = () => {
    switch (activeSection) {
      case "news":
        return <NewsSection />;
      case "dpharm":
        return <DpharmSection />;
      case "bsc":
        return <BscNursingSection />;
      case "gallery":
        return <GallerySection/>
      case "students":
        return <StudentDetails/>
      case "queries":
        return <Queries/>
      case "fee":
        return <FeeEnquiry/>
      case "career":
        return <CareerSection/>
      case "admission":
        return <AdmissionPage/>
      case "admission2":
        return <AdmissionNursing/>
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <Link to={'/'} className="d-flex justify-content-center">
          <img src="/footerLogo.png" className="img-fluid w-75" alt="" />
        </Link>
        <hr className=""/>
        <ul>
          <li onClick={() => setActiveSection("news")}>News</li>
          <li onClick={() => setActiveSection("dpharm")}>D Pharm</li>
          <li onClick={() => setActiveSection("bsc")}>BSc Nursing</li>
          <li onClick={() => setActiveSection("gallery")}>Gallery</li>
          <li onClick={() => setActiveSection("students")}>Student Details</li>
          <li onClick={() => setActiveSection("queries")}>Queries</li>
          <li onClick={() => setActiveSection("fee")}>Fee Enquiry</li>
          <li onClick={() => setActiveSection("career")}>Career</li>
          <li onClick={() => setActiveSection("admission")}>Admission-ithis medcity</li>
          <li onClick={() => setActiveSection("admission2")}>Admission-ithis nursing</li>
        </ul>
      </aside>

      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default AdminDashboard;
