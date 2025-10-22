import React, { useState } from "react";
import "./CareerSection.css";

function CareerSection() {
  const [careers, setCareers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    closingDate: "",
    experience: "",
    qualification: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.department) return;

    if (editingId) {
      setCareers(
        careers.map((c) =>
          c.id === editingId ? { ...formData, id: editingId } : c
        )
      );
      setEditingId(null);
    } else {
      setCareers([...careers, { ...formData, id: Date.now() }]);
    }

    setFormData({
      title: "",
      department: "",
      closingDate: "",
      experience: "",
      qualification: "",
    });
  };

  const handleEdit = (id) => {
    const career = careers.find((c) => c.id === id);
    setFormData(career);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setCareers(careers.filter((c) => c.id !== id));
  };

  return (
    <div className="career-section">
      <h2>Career Opportunities</h2>

      {/* Form */}
      <form className="career-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Closing Date</label>
            <input
              type="date"
              name="closingDate"
              value={formData.closingDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Qualification</label>
            <textarea
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </div>

        <button type="submit">
          {editingId ? "Update Career" : "Add Career"}
        </button>
      </form>

      {/* Table */}
      <table className="career-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Department</th>
            <th>Closing Date</th>
            <th>Experience</th>
            <th>Qualification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {careers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.title}</td>
              <td>{c.department}</td>
              <td>{c.closingDate}</td>
              <td>{c.experience}</td>
              <td>{c.qualification}</td>
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

export default CareerSection;
