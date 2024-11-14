import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChildCard = ({ name, age, image, hobbies, height, county }) => {
  const [isAdopted, setIsAdopted] = useState(false);

  const handleAdoptClick = () => {
    setIsAdopted(true);
  };

  return (
    <div className="card shadow-sm h-100">
      <img 
        src={image || 'https://via.placeholder.com/300'}  // Use a placeholder image if image is missing
        className="card-img-top" 
        alt={`${name}'s image`} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Age:</strong> {age}</p>
        <p className="card-text"><strong>Height:</strong> {height}</p>
        <p className="card-text"><strong>County:</strong> {county}</p>
        <p className="card-text"><strong>Hobbies:</strong> {(hobbies || []).join(', ')}</p>
        <button 
          onClick={handleAdoptClick}
          className={`btn ${isAdopted ? 'btn-success' : 'btn-primary'} w-100 mt-3`}
          disabled={isAdopted} // Disable button after adoption
        >
          {isAdopted ? 'Adopted' : 'Adopt'}
        </button>
      </div>
    </div>
  );
};

export default ChildCard;
