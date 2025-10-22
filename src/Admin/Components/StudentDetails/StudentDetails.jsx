import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./StudentDetails.css";

// Sample data
const STUDENT_DATA = [
  {
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    appliedDate: "2025-10-22",
    mobile: "9876543210",
    regNo: "BSC1234",
    total: 355,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    appliedDate: "2025-10-20",
    mobile: "9876543220",
    regNo: "BSC1235",
    total: 350,
  },
];

function StudentDetails() {
  const [students] = useState(STUDENT_DATA);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterStudents = () => {
    if (!startDate && !endDate) return students;

    return students.filter((s) => {
      const applied = new Date(s.appliedDate);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && end) {
        return applied >= start && applied <= end;
      } else if (start) {
        return applied >= start;
      } else if (end) {
        return applied <= end;
      } else {
        return true;
      }
    });
  };

  const exportExcel = () => {
    const filteredData = filterStudents();
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    const buf = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    saveAs(new Blob([buf]), "StudentDetails.xlsx");
  };

  return (
    <div className="student-section">
      <h2>Student Details</h2>

      <div className="filter-export">
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={exportExcel}>Export Excel</button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Applied Date</th>
            <th>Mobile</th>
            <th>Reg No</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filterStudents().map((s, index) => (
            <tr key={index}>
              <td>
                {s.photo && <img src={s.photo} alt="student" className="student-thumb" />}
              </td>
              <td>{s.name}</td>
              <td>{s.appliedDate}</td>
              <td>{s.mobile}</td>
              <td>{s.regNo}</td>
              <td>{s.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;
