import React, { useState } from "react";
import "./NewsSection.css";

function NewsSection() {
  const [newsList, setNewsList] = useState([
    { id: 1, description: "New batch admissions open for 2025!" },
  ]);
  const [newDescription, setNewDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!newDescription.trim()) return;

    if (editingId) {
      setNewsList(
        newsList.map((n) =>
          n.id === editingId ? { ...n, description: newDescription } : n
        )
      );
      setEditingId(null);
    } else {
      const newNews = {
        id: Date.now(),
        description: newDescription,
      };
      setNewsList([...newsList, newNews]);
    }

    setNewDescription("");
  };

  const handleEdit = (id) => {
    const newsToEdit = newsList.find((n) => n.id === id);
    setNewDescription(newsToEdit.description);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setNewsList(newsList.filter((n) => n.id !== id));
  };

  return (
    <div className="news-section">
      <h2>News Management</h2>

      {/* Form */}
      <form onSubmit={handleAddNews} className="news-form">
        <textarea
          placeholder="Enter news description..."
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit">
          {editingId ? "Update News" : "Add News"}
        </button>
      </form>

      {/* Table */}
      <table className="news-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news.id}>
              <td>{news.id}</td>
              <td>{news.description}</td>
              <td>
                <button onClick={() => handleEdit(news.id)}>Edit</button>
                <button onClick={() => handleDelete(news.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewsSection;
