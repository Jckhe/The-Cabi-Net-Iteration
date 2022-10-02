import React from 'react';
import SpiceDisplay from '../components/SpiceDisplay.jsx';

// do we need to import actions into this component? 

// on mount, make a get request to the database?

// I believe we need to have use mapStateToProps and mapDispatchToProps in this component. then push prop drill them down to SpiceDisplay


export default function SpiceContainer() {
  return (
    <div className="spice-container">
      <SpiceDisplay />
    </div>
  )
}