import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

// I think prop drilling the props down from SpiceContainer will be better than mappingstate and dispatch to props here..
// then once onSubmit is invoked, we can go up the chain into SpiceContainer and send the info to actions.js

const mapStateToProps = state => ({
  username: state.spices.username
});

const AddSpice = (props) => {

  const handleClick = () => {
    const name = document.getElementById('name').value
    const containerSize = document.getElementById('containerSize').value
    const remaining = document.getElementById('remaining').value
    const spiceObj = {
      name: name,
      containersize: containerSize,
      remaining: remaining
    }
    console.log('this is the spiceInfo ', spiceObj, )
    props.createSpice(spiceObj);
  }

  return (
    <div className="add-spice-container">
      <p><strong className='add-bar'>Add New Spice!</strong></p>
      <label>Name:</label>  
      <input type="text" id="name"></input>
      <label>Container Size:</label>
      <input type="text" id="containerSize"></input>
      <label>% Left:</label>
      <input type="number" id="remaining"></input>
      <button type="submit" onClick={handleClick}>Add!</button>
    </div>
  )
}

export default connect(mapStateToProps)(AddSpice)