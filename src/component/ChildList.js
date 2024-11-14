import React, { useState, useEffect } from 'react';
import ChildCard from './ChildCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChildList = () => {
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCounty, setSelectedCounty] = useState(""); // State to store the selected county
  const [filteredChildren, setFilteredChildren] = useState([]); // State for filtered list

  useEffect(() => {
    fetch("https://project-backend-eta.vercel.app/kids")  // Replace with your actual JSON server URL
      .then(response => response.json())
      .then(data => {
        setChildren(Array.isArray(data) ? data : []);
        setFilteredChildren(Array.isArray(data) ? data : []); // Initialize filtered list
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('There was an error fetching the data. Please try again later.');
        setLoading(false);
      });
  }, []);

  // Get unique counties from children data
  const uniqueCounties = [...new Set(children.map(child => child.county))];

  // Handle form submission to filter by selected county
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const newFilteredChildren = selectedCounty 
      ? children.filter(child => child.county === selectedCounty)
      : children; // Show all if no county is selected
    setFilteredChildren(newFilteredChildren); // Update filtered children list
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Available Children for Adoption</h2>

      {/* Filter by County Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="countyFilter" className="form-label">Filter by County:</label>
        <select
          id="countyFilter"
          className="form-select"
          value={selectedCounty}
          onChange={(e) => setSelectedCounty(e.target.value)}
        >
          <option value="">All Counties</option>
          {uniqueCounties.map((county, index) => (
            <option key={index} value={county}>
              {county}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary mt-3">Filter</button>
      </form>

      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          filteredChildren.length > 0 ? (
            filteredChildren.map(child => (
              <div key={child.id} className="col-md-4 col-sm-6 col-lg-3 mb-4">
                <ChildCard {...child} />
              </div>
            ))
          ) : (
            <p>No children available for adoption in this county.</p>
          )
        )}
      </div>
    </div>
  );
};

export default ChildList;
