import React, { useState } from "react";
import "./FeeEnquiry.css";

function FeeEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.course) return;

    if (editingId) {
      setEnquiries(
        enquiries.map((q) =>
          q.id === editingId ? { ...formData, id: editingId } : q
        )
      );
      setEditingId(null);
    } else {
      setEnquiries([...enquiries, { ...formData, id: Date.now() }]);
    }

    setFormData({
      name: "",
      email: "",
      mobile: "",
      course: "",
      message: "",
    });
  };

  const handleEdit = (id) => {
    const enquiry = enquiries.find((q) => q.id === id);
    setFormData(enquiry);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setEnquiries(enquiries.filter((q) => q.id !== id));
  };

  return (
    <div className="fee-enquiry-section">
      <h2>Fee Enquiries</h2>

      {/* Form */}
      <form className="fee-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </div>

        <button type="submit">
          {editingId ? "Update Enquiry" : "Add Enquiry"}
        </button>
      </form>

      {/* Table */}
      <table className="fee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Course</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.course}</td>
              <td>{e.message}</td>
              <td>
                <button onClick={() => handleEdit(e.id)}>Edit</button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeEnquiry;
