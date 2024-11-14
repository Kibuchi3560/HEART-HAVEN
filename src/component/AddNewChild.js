import React, { useState, useEffect } from 'react';

const AddNewChild = () => {
  const [users, setUsers] = useState([]);
  const [childData, setChildData] = useState({
    name: '',
    description: '',
    userId: '',  // To associate the child with a user
    picture: '',  // To store the picture (base64 or file path)
  });
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // New state to toggle form visibility

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

  // Handle file input change (for picture upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setChildData({
          ...childData,
          picture: reader.result, // Save the base64 encoded image
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!childData.name || !childData.description || !childData.userId || !childData.picture) {
      alert('Please fill all fields and upload a picture.');
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
          description: '',
          userId: '',
          picture: '',
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
      {/* Button to toggle the form visibility */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Child'}
      </button>

      {/* Form is conditionally rendered based on the showForm state */}
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
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={childData.description}
                onChange={handleChange}
                placeholder="Enter a description"
                required
              />
            </div>

            <div>
              <label htmlFor="userId">User's Name</label>
              <select
                id="userId"
                name="userId"
                value={childData.userId}
                onChange={handleChange}
                required
              >
                <option value="">Select a user</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="picture">Upload Picture</label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={handleFileChange}
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
