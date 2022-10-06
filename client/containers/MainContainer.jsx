import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar.jsx';
import AddSpice from '../components/AddSpice.jsx';
import SpiceContainer from './SpiceContainer.jsx';
// import { updateSpiceActionCreator } from '../actions/actions.js';
import { connect } from 'react-redux';
import { updateSpice } from '../../server/controllers/spiceController.js';

const mapStateToProps = state => ({
  spiceRack: state.spices.spiceRack,
  username: state.spices.username
});

const mapDispatchToProps = dispatch => ({
  updateSpice : (spiceObj) => dispatch(/*function here*/{ type: 'UPDATE_SPICE', payload: spiceObj }),
});

const MainContainer = (props) => {

  function handlePost(spiceObj) {
    fetch(`/spice/${props.username}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: spiceObj.name,
        remaining: spiceObj.remaining,
        containersize: spiceObj.containersize,
      }),
    })
      .then((res) => {
        console.log('response in handlePost: ', res)
        return updateSpice(res.json());
      })
      .catch((err) => {
        console.log(err);
      })
  };


  return (
    <div>
      <Navbar logout={props.logout}/>
      <AddSpice createSpice={handlePost}/>
      <SpiceContainer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);