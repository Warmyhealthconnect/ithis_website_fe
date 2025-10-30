import React, { useEffect, useState } from "react";
import {
  getAllNewsApi,
  getLatestNewsApi,
  editNewsApi,
  addNewsApi,   // ← Capital N
} from "../../../../services/allApis";import "./NewsSection.css";

function NewsSection() {
  const [newsList, setNewsList] = useState([]);
  const [newDescription, setNewDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(null);

  // helper to normalise commonApi return (some commonApi implementations return response or response.data)
  const extractData = (resp) => (resp && resp.data ? resp.data : resp);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await getAllNewsApi();
      const data = extractData(resp);
      // if server returns an array, use it; otherwise handle gracefully
      setNewsList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (!newDescription.trim()) return;
    setBtnLoading(true);
    setError(null);

    try {
      if (editingId) {
        // update on server
        const resp = await editNewsApi(editingId, { description: newDescription });
        const updated = extractData(resp);
        // update local state
        setNewsList((prev) =>
          prev.map((n) => (String(n._id || n.id) === String(editingId) ? updated : n))
        );
        setEditingId(null);
      } else {
        // add on server
        const resp = await addNewsApi({ description: newDescription });
        const created = extractData(resp);
        // If server returns the saved object, append; otherwise append a naive object
        if (created && (created._id || created.id || created.description)) {
          setNewsList((prev) => [...prev, created]);
        } else {
          setNewsList((prev) => [
            ...prev,
            { id: Date.now(), description: newDescription },
          ]);
        }
      }
      setNewDescription("");
    } catch (err) {
      console.error(err);
      // server might return a string message (e.g., "News already exists")
      const msg = err?.response?.data || "Failed to save news";
      setError(msg);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleEdit = (id) => {
    const item = newsList.find((n) => String(n._id || n.id) === String(id));
    if (!item) return;
    setNewDescription(item.description);
    setEditingId(String(item._id || item.id));
  };

  const handleDelete = async (id) => {
    // optional confirmation
    if (!window.confirm("Delete this news item?")) return;
    setBtnLoading(true);
    setError(null);
    try {
      await deleteNewsApi(id);
      setNewsList((prev) => prev.filter((n) => String(n._id || n.id) !== String(id)));
    } catch (err) {
      console.error(err);
      setError("Failed to delete");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="news-section">
      <h2>News Management</h2>

      {error && <div className="error">{String(error)}</div>}

      <form onSubmit={handleAddOrUpdate} className="news-form">
        <textarea
          placeholder="Enter news description..."
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          rows={4}
        />
        <button type="submit" disabled={btnLoading}>
          {btnLoading ? "Saving..." : editingId ? "Update News" : "Add News"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setNewDescription("");
            }}
            disabled={btnLoading}
          >
            Cancel
          </button>
        )}
      </form>

      {loading ? (
        <p>Loading news...</p>
      ) : (
        <table className="news-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th style={{ minWidth: 150 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news) => {
              const nid = news._id || news.id;
              return (
                <tr key={nid}>
                  <td>{nid}</td>
                  <td>{news.description}</td>
                  <td>
                    <button onClick={() => handleEdit(nid)} disabled={btnLoading}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(nid)} disabled={btnLoading}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {newsList.length === 0 && (
              <tr>
                <td colSpan={3}>No news found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default NewsSection;
