import React from 'react';
import SpiceDisplay from '../components/SpiceDisplay';
// do we need to import actions into this component? 

// I believe we need to have use mapStateToProps and mapDispatchToProps in this component. then push prop drill them down to SpiceDisplay

export default function SpiceContainer() {
  return (
    <div>
      <SpiceDisplay />
    </div>
  )
}