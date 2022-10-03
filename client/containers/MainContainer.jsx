import React from 'react';
import Navbar from '../components/Navbar.jsx';
import AddSpice from '../components/AddSpice.jsx';
import SpiceContainer from './SpiceContainer.jsx';
import { connect } from 'react-redux';

const mapStateToProps = ({ spices }) => ({
  spiceRack: spices.spiceRack
})

// NEEDS FUNCTIONS FROM 'actions.js' INSIDE 'dispatch()' ONCE THEY HAVE NAMES
const mapDispatchToProps = dispatch => ({
  createSpice: (spiceInfo) => dispatch(actions.addSpice(spiceInfo)),
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