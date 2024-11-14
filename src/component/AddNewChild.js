import React, { useState, useEffect } from 'react';

const AddNewChild = () => {
  const [users, setUsers] = useState([]);
  const [childData, setChildData] = useState({
    name: '',
    age: '',
    height: '',
    county: '',
    hobbies: [],  // Initialize hobbies as an array
    image: '',    // Allow users to input a URL for the image
  });
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [hobbyInput, setHobbyInput] = useState('');  // Separate state for the hobby input

  // Fetch users from the /users endpoint
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildData({
      ...childData,
      [name]: value,
    });
  };

  // Handle hobby input change
  const handleHobbyChange = (e) => {
    setHobbyInput(e.target.value);
  };

  // Add a hobby to the hobbies array
  const addHobby = () => {
    if (hobbyInput.trim() === '') return;
    setChildData({
      ...childData,
      hobbies: [...childData.hobbies, hobbyInput.trim()],
    });
    setHobbyInput('');  // Clear the hobby input after adding
  };

  // Remove a hobby from the hobbies array
  const removeHobby = (index) => {
    setChildData({
      ...childData,
      hobbies: childData.hobbies.filter((_, i) => i !== index),
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!childData.name || !childData.age || !childData.height || !childData.county || childData.hobbies.length === 0 || !childData.image) {
      alert('Please fill all fields.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/child', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(childData),
      });

      if (response.ok) {
        alert('Child added successfully!');
        setChildData({
          name: '',
          age: '',
          height: '',
          county: '',
          hobbies: [],
          image: '',
        }); // Reset form
      } else {
        alert('Failed to add child.');
      }
    } catch (error) {
      console.error('Error adding child:', error);
      alert('Error adding child. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-child-container">
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Child'}
      </button>

      {showForm && (
        <div className="add-child-form">
          <h2>Add New Child</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Child Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={childData.name}
                onChange={handleChange}
                placeholder="Enter child's name"
                required
              />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={childData.age}
                onChange={handleChange}
                placeholder="Enter child's age"
                required
              />
            </div>

            <div>
              <label htmlFor="height">Height</label>
              <input
                type="text"
                id="height"
                name="height"
                value={childData.height}
                onChange={handleChange}
                placeholder="Enter child's height"
                required
              />
            </div>

            <div>
              <label htmlFor="county">County</label>
              <input
                type="text"
                id="county"
                name="county"
                value={childData.county}
                onChange={handleChange}
                placeholder="Enter child's county"
                required
              />
            </div>

            <div>
              <label htmlFor="hobbies">Hobbies</label>
              <input
                type="text"
                id="hobbyInput"
                name="hobbyInput"
                value={hobbyInput}
                onChange={handleHobbyChange}
                placeholder="Enter a hobby and click Add"
              />
              <button type="button" onClick={addHobby}>Add Hobby</button>
              <ul>
                {childData.hobbies.map((hobby, index) => (
                  <li key={index}>
                    {hobby} <button type="button" onClick={() => removeHobby(index)}>Remove</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={childData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Add Child'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNewChild;
