import React from 'react';
import Navbar from '/Navbar';

export default function MainContainer() {
  return (
    <div>
      <Navbar />
      <AddSpice />
      <SpiceContainer />
    </div>
  )
}