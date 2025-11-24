import React, { useState } from "react";
import "./BscNursingSection.css";
import { getAllNursingApi,editNursingApi,deleteNewsApi,addNursingApi } from "../../../../services/allApis";

function BscNursingSection() {
  const [courses, setCourses] = useState([
    { id: 1, duration: "4 Years", seat: 100, eligibility: "10+2 with Science",academiccontrol:"pla",control:"pla" },
  ]);

  const [formData, setFormData] = useState({
    duration: "",
    seat: "",
    eligibility: "",
    academiccontrol: "",
    control: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.duration || !formData.seat || !formData.eligibility) return;

    if (editingId) {
      setCourses(
        courses.map((c) =>
          c.id === editingId ? { ...c, ...formData } : c
        )
      );
      setEditingId(null);
    } else {
      setCourses([...courses, { id: Date.now(), ...formData }]);
    }

    setFormData({ duration: "", seat: "", eligibility: "" });
  };

  const handleEdit = (id) => {
    const course = courses.find((c) => c.id === id);
    setFormData(course);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="bscnursing-section">
      <h2>B.Sc Nursing Management</h2>

      {/* Form */}
      <form className="bscnursing-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 4 Years"
          />
        </div>

        <div className="form-group">
          <label>Seat</label>
          <input
            type="number"
            name="seat"
            value={formData.seat}
            onChange={handleChange}
            placeholder="e.g., 100"
          />
        </div>

        <div className="form-group">
          <label>Eligibility</label>
          <input
            type="text"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            placeholder="e.g., 10+2 with Science"
          />
        </div>

        <div className="form-group">
          <label>Accademic Control</label>
          <input
            type="text"
            name="academiccontrol"
            value={formData.academiccontrol}
            onChange={handleChange}
            placeholder="calicut university"
          />
        </div>
        <div className="form-group">
          <label>Control</label>
          <input
            type="text"
            name="control"
            value={formData.control}
            onChange={handleChange}
            placeholder="Total Seats: 50
            Govt – 50%
            Mgt. – 50% "
          />
        </div>

        <button type="submit">
          {editingId ? "Update Course" : "Add Course"}
        </button>
      </form>

      {/* Table */}
      <table className="bscnursing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Duration</th>
            <th>Seat</th>
            <th>Eligibility</th>
            <th>Accademic Control</th>
            <th>Control</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.duration}</td>
              <td>{c.seat}</td>
              <td>{c.eligibility}</td>
              <td>{c.academiccontrol}</td>
              <td>{c.control}</td>
              <td>
                <button onClick={() => handleEdit(c.id)}>Edit</button>
                <button onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BscNursingSection;
