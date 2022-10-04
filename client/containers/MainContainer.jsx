import React from 'react';
import Navbar from '../components/Navbar.jsx';
import AddSpice from '../components/AddSpice.jsx';
import SpiceContainer from './SpiceContainer.jsx';
import { addSpice } from '../actions/actions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  spiceRack: state.spices.spiceRack
})

// NEEDS FUNCTIONS FROM 'actions.js' INSIDE 'dispatch()' ONCE THEY HAVE NAMES
const mapDispatchToProps = dispatch => ({
  createSpice: (spiceInfo) => dispatch(addSpice(spiceInfo)),
})

const MainContainer = (props) => {

  return (
    <div>
      <Navbar />
      <AddSpice createSpice={props.createSpice}/>
      <SpiceContainer />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);