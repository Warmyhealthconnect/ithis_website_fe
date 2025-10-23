import React from "react";
import "./AdminLoginModal.css";

export default function AdminLoginModal({ show, onClose }) {
  if (!show) return null; // Don't render unless open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container position-relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={onClose}
        ></button>

        <h3 className="text-center mb-3">Admin Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn login_button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
