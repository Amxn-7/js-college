import React, { useEffect, useState } from "react";

export default function SimpleUserApp() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ GET — Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ POST — Add a new user
  const addUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "New User",
          email: "newuser@example.com",
        }),
      });
      const newUser = await res.json();
      setUsers([...users, newUser]);
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // ✅ PUT - Update a user
  const updateUser = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          name: "Updated User",
          email: "updateduser@example.com",
        }),
      });
      const updatedUser = await res.json();
      alert("User updated");
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        )
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // ✅ DELETE - Delete user
  const deleteUser = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });
      alert("User deleted!");
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Simple User App (GET, POST, PUT, DELETE)</h2>

      <button
        onClick={addUser}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Add User
      </button>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            <p>
              <strong>{user.name}</strong> — {user.email}
            </p>
            <button
              onClick={() => updateUser(user.id)}
              style={{
                marginRight: "10px",
                padding: "5px 10px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
            <button
              onClick={() => deleteUser(user.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}