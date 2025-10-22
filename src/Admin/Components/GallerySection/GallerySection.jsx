import React, { useState } from "react";
import "./GallerySection.css";

function GallerySection() {
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      photo: "",
      description: "Sample description for gallery item",
    },
  ]);

  const [formData, setFormData] = useState({
    photo: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description) return;

    if (editingId) {
      setGalleryItems(
        galleryItems.map((item) =>
          item.id === editingId ? { ...item, ...formData } : item
        )
      );
      setEditingId(null);
    } else {
      setGalleryItems([...galleryItems, { id: Date.now(), ...formData }]);
    }

    setFormData({ photo: "", description: "" });
  };

  const handleEdit = (id) => {
    const item = galleryItems.find((g) => g.id === id);
    setFormData(item);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setGalleryItems(galleryItems.filter((g) => g.id !== id));
  };

  return (
    <div className="gallery-section">
      <h2>Gallery Management</h2>

      {/* Form */}
      <form className="gallery-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>

        <button type="submit">
          {editingId ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* Gallery Table */}
      <table className="gallery-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {galleryItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.photo && (
                  <img
                    src={item.photo}
                    alt="gallery"
                    className="gallery-thumb"
                  />
                )}
              </td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GallerySection;
