import React, { useState, useEffect } from "react";
import axios from "axios";
import './Table.css'

const Table = () => {
  const [users, setUsers] = useState([]); 
  const [search, setSearch] = useState("");  
  const [sortField, setSortField] = useState(""); 

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setUsers(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name && user.name.toLowerCase().includes(search.toLowerCase())
  );


  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortField === "name") {
      return a.name.localeCompare(b.name); 
    } else if (sortField === "age") {
      return a.age - b.age;
    }
    return 0;
  });

  return (
    <div className="table-container">
      <h2>Users</h2>

    
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />

     
      <select onChange={(e) => setSortField(e.target.value)} value={sortField}>
        <option value="">Sort</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>

     
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
         
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td> 
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;