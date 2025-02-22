import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { deleteSpice, updateSpice } from '../../server/controllers/spiceController.js';
// import { updateSpiceActionCreator, generateSpiceListActionCreator, deleteSpiceActionCreator } from '../actions/actions.js';
import SpiceDisplay from '../components/SpiceDisplay.jsx';



const mapStateToProps = state => ({
  spiceRack: state.spices.spiceRack,
  username: state.spices.username
});

//updateSpice is reducer for both adding a new spice and updating details in spice, returns entire spiceObj for spiceList
const mapDispatchToProps = dispatch => ({
  updateSpice : (spiceObj) => dispatch(/*function here*/{ type: 'UPDATE_SPICE', payload: spiceObj }),
  deleteSpice: (id) => dispatch(/*function here*/{ type: 'DELETE_SPICE', payload: id })
}); 

const SpiceContainer = (props) => {


  function handleDel(id) {
    fetch('/spice/', {
      method: 'DELETE',
          headers: {
              'Accept': "application/json, text/plain, */*",
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({id: id})
    })
      .then((res) => {
        console.log('response in handleDel: ', res);
        return props.deleteSpice(id);
      })
      .catch((err) => {
        console.log('Error in handleDel: ', err);
      })
    };
    
  function handlePatch(spiceObj) {
    fetch('/spice/update', {
      method: 'PATCH',
          headers: {
              'Accept': "application/json, text/plain, */*",
              'Content-Type': 'application/json',
            }, 
          body: JSON.stringify({
            id: spiceObj.id,
            remaining: spiceObj.remaining
          })
    })
      .then((res) => {
        console.log('response in handlePatch: ', res);
        updateRack(rack + 1);
        return props.updateSpice(spiceObj);
      })
      .catch((err) => {
        console.log('error in handlePatch: ', err);
      })
  };

    

  // const dispatch = useDispatch();
  const spiceArray = [];
  props.spiceRack.forEach((spice) => {
    spiceArray.push(<SpiceDisplay name={spice.name} remaining={spice.remaining} containersize={spice.containersize} id={spice.id} updateSpice={handlePatch} deleteSpice={handleDel} key={spice.id}/>)
  });

  return (
    (
      <div className='spice-container'>
        { spiceArray }
      </div>
    )
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SpiceContainer);