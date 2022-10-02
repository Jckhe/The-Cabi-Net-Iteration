import React from 'react';
import Navbar from '../components/Navbar.jsx';
import AddSpice from '../components/AddSpice.jsx';
import SpiceContainer from './SpiceContainer.jsx';

export default function MainContainer() {
  return (
    <div>
      <Navbar />
      <AddSpice />
      <SpiceContainer />
    </div>
  )
}