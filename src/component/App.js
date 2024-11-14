import React from 'react'
import Footer from './Footer'
import Details from './Details'
import Header from './Header'
import ChildCard from './ChildCard'
import AddNewChild from './AddNewChild'

export default function App() {
  return (
    <div>
    <Header />
    <Details />
    <ChildCard />
    <AddNewChild/>
    <Footer />
    </div>
  )
}