import React, { useState } from 'react';
import './App.css';

// Modal component
const ApplicationFormModal = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log('Form Data:', data);
        alert('Your application has been submitted!');
        onClose(); // Close the modal after submission
    };

    return (
        <div
            style={{
                display: isOpen ? 'block' : 'none',
                position: 'fixed',
                zIndex: 1000,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Added a darker background overlay
                paddingTop: '60px',
            }}
        >
            <div
                style={{
                    backgroundColor: '#fff',
                    margin: '5% auto',
                    padding: '20px',
                    borderRadius: '8px',
                    width: '50%',
                    maxWidth: '600px',
                }}
            >
                <button
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        fontSize: '30px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2>Child Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Your Full Name:
                        <input type="text" name="name" required />
                    </label>
                    <br />
                    <label>
                        Your Age:
                        <input type="number" name="age" required />
                    </label>
                    <br />
                    <label>
                        Your Email Address:
                        <input type="email" name="email" required />
                    </label>
                    <br />
                    <label>
                        Why do you want to apply for a child?
                        <textarea name="reason" rows="4" required></textarea>
                    </label>
                    <br />
                    <button type="submit">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

// Navbar component
const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#45a049' }}>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                {/* Empty list items for navbar elements */}
            </ul>

            {/* Button at top-left corner */}
            <button
                onClick={handleOpenModal}
                style={{
                    position: 'absolute',  // Absolute positioning
                    top: '80px',           // Position 10px from the top
                    right: '5px',          // Position 10px from the left
                    padding: '5px 10px',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',      // Ensures the text is readable
                    zIndex: '100',         // Ensure the button is above other elements
                }}
            >
                Apply for a Child
            </button>

            {/* Modal for the application form */}
            <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </nav>
    );
};

export default Navbar;
