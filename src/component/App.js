import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Details from './Details';
import ChildList from './ChildList'; // Import ChildList

export default function App() {
  return (
    <div>
      <Header />
      <Details />
      <ChildList />  {/* Render ChildList here */}
      <Footer />
    </div>
  );
}
