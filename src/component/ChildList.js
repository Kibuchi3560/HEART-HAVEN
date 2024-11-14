import React, { useState, useEffect } from 'react';
import ChildCard from './ChildCard';  // Import ChildCard component
import 'bootstrap/dist/css/bootstrap.min.css';

const ChildList = () => {
  // State to store the fetched children data
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);  // To manage loading state
  const [error, setError] = useState(null);  // State to manage error

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("http://localhost:5000/child")  // Replace with your actual JSON server URL
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        setChildren(Array.isArray(data) ? data : []);  // Ensure data is an array
        setLoading(false);   // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);  // Handle any errors
        setError('There was an error fetching the data. Please try again later.');
        setLoading(false);   // Set loading to false even if there's an error
      });
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Available Children for Adoption</h2>
      <div className="row">
        {loading ? (
          <p>Loading...</p>  // Display loading message while fetching data
        ) : error ? (
          <div className="alert alert-danger">{error}</div>  // Show error message
        ) : (
          children.length > 0 ? (
            children.map(child => (
              <div key={child.id} className="col-md-4 col-sm-6 col-lg-3 mb-4">
                <ChildCard {...child} />  {/* Pass the child data as props to ChildCard */}
              </div>
            ))
          ) : (
            <p>No children available for adoption.</p>
          )
        )}
      </div>
    </div>
  );
};

export default ChildList;
