import React from 'react';
import Header from './Header';
import './App.css'
import Navbar from './Navbar';

import AddNewChild from './AddNewChild';
const App = () => {
  console.log("App Component Rendered");
  return (
    <div className='App'>
      <Header />
       
      <AddNewChild />
      <Navbar />
      
      
    </div>  
  );
};

export default App;
