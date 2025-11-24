import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getAllDpharmApi,
  addDpharmApi,
  editDpharmApi,
  deleteDpharmApi,
} from "../../../../services/allApis";
import "./DpharmSection.css";

function DpharmSection() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    duration: "",
    seat: "",
    eligibility: "",
    academiccontrol: "",
    control: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all courses when page loads
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await getAllDpharmApi();
    if (res.status === 200) {
      setCourses(res.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (editingId) {
        res = await editDpharmApi(editingId, formData);
        toast.success("Course updated successfully!");
      } else {
        res = await addDpharmApi(formData);

        // if the backend sends a 403, show that message
        if (res.status === 403) {
          toast.warning(res.data || "Only one course can be added.");
          return;
        }

        toast.error("Course added successfully!");
      }

      // clear form
      setFormData({
        duration: "",
        seat: "",
        eligibility: "",
        academiccontrol: "",
        control: "",
      });

      setEditingId(null);
      fetchCourses();
    } catch (error) {
      console.error(error);

      // show proper message if backend error
      if (error.response && error.response.data) {
        alert(error.response.data);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const handleEdit = (id) => {
    const course = courses.find((c) => c._id === id);
    setFormData(course);
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    await deleteDpharmApi(id);
    fetchCourses();
  };

  return (
    <div className="dpharm-section">
      <h2>D.Pharm Management</h2>
      <form className="dpharm-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Duration</label>
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Seat</label>
          <input type="number" name="seat" value={formData.seat} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Eligibility</label>
          <input type="text" name="eligibility" value={formData.eligibility} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Academic Control</label>
          <input type="text" name="academiccontrol" value={formData.academiccontrol} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Control</label>
          <input type="text" name="control" value={formData.control} onChange={handleChange} />
        </div>

        <button type="submit">{editingId ? "Update Course" : "Add Course"}</button>
      </form>

      <table className="dpharm-table">
        <thead>
          <tr>
            <th>Duration</th>
            <th>Seat</th>
            <th>Eligibility</th>
            <th>Academic Control</th>
            <th>Control</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c._id}>
              <td>{c.duration}</td>
              <td>{c.seat}</td>
              <td>{c.eligibility}</td>
              <td>{c.academiccontrol}</td>
              <td>{c.control}</td>
              <td>
                <button onClick={() => handleEdit(c._id)}>Edit</button>
                <button onClick={() => handleDelete(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DpharmSection;
