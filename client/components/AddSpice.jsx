import React from 'react';

export default function AddSpice() {

  // I believe we need to have use mapStateToProps and mapDispatchToProps in this component
  // then push prop drill them down to SpiceDisplay

  function handleClick() {
    console.log('ahh you clicked me')
  }

  return (
    <div className="add-spice-container">
      <h2>AddSpice component!</h2>
      <form>
        Type:
        <input></input>
        Size:
        <input></input>
        Amount:
        <input></input>
        <button onClick={handleClick}>Add!</button>
      </form>
    </div>
  )
};