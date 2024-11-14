import React, { useState } from 'react'; // Import useState from React
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom

// Define the different pages/content as components

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Heart Haven. We are a family adoption center dedicated to finding loving homes for children in need.</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Heart Haven is committed to building strong, loving families through the adoption of children.</p>
    </div>
  );
};

const Adopt = () => {
  return (
    <div>
      <h2>Adopt a Child</h2>
      <p>Find the perfect child to adopt and give them a loving, forever home.</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for more information about adoption or how you can get involved.</p>
    </div>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can replace this with real authentication logic (e.g., API request)
    
      alert('Signed in successfully!');
      
   
     
  };

  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      ) : (
        <p>You are signed in!</p>
      )}
    </div>
  );
};

// Header component now includes routing
export default function Header() {
  return (
    <Router>
      <div className="header-container">
        <header>
          <div className="logo">
            <h1>Heart Haven</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/adopt">Adopt a Child</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
            </ul>
          </nav>
        </header>

        <div className="content-container">
          {/* Routes to handle content display */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}