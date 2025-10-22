import React, { useState } from "react";
import "./Queries.css";

function Queries() {
  const [queries, setQueries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    if (editingId) {
      setQueries(
        queries.map((q) =>
          q.id === editingId ? { ...formData, id: editingId } : q
        )
      );
      setEditingId(null);
    } else {
      setQueries([...queries, { ...formData, id: Date.now() }]);
    }

    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };

  const handleEdit = (id) => {
    const query = queries.find((q) => q.id === id);
    setFormData(query);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setQueries(queries.filter((q) => q.id !== id));
  };

  return (
    <div className="queries-section">
      <h2>User Queries</h2>

      {/* Form */}
      <form className="queries-form" onSubmit={handleSubmit}>
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
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
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

        <button type="submit">{editingId ? "Update Query" : "Add Query"}</button>
      </form>

      {/* Table */}
      <table className="queries-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((q) => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.name}</td>
              <td>{q.phoneNumber}</td>
              <td>{q.email}</td>
              <td>{q.message}</td>
              <td>
                <button onClick={() => handleEdit(q.id)}>Edit</button>
                <button onClick={() => handleDelete(q.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Queries;
