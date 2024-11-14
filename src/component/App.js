import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Details from './Details';
import Header from './Header';
import ChildCard from './ChildCard';
import AddNewChild from './AddNewChild';  // Keep the import
import './App.css';
import Navbar from './Navbar';

export default function App() {
  // State to store children data
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:5000/child")  // Replace with your actual JSON server URL
      .then(response => response.json())
      .then(data => setChildren(data))
      .catch(error => console.error("Error fetching children data:", error));
  }, []);

  const handleAddChild = (newChild) => {
    // This function can be passed to AddNewChild to update the list
    setChildren([...children, newChild]);
  };

  return (
    <div>
      <Header />
     
      <Details />
      {/* Render a list of ChildCard components for each child */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Available Children for Adoption</h2>
        <div className="row">
          {children.map((child) => (
            <div key={child.id} className="col-md-4 col-sm-6 col-lg-3 mb-4">
              <ChildCard {...child} />
            </div>
          ))}
        </div>
      </div>
      <AddNewChild onAddChild={handleAddChild}  />  {/* Pass handleAddChild as a prop */}
      <Footer />
    </div>
  );
}
