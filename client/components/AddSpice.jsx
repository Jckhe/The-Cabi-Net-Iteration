import React from 'react';

// I think prop drilling the props down from SpiceContainer will be better than mappingstate and dispatch to props here..
// then once onSubmit is invoked, we can go up the chain into SpiceContainer and send the info to actions.js

const handleClick = () => {
  const name = document.getElementById('name').value
  const containerSize = document.getElementById('containerSize').value
  const remaining = document.getElementById('remaining').value
  const spiceInfo = {
    name: name,
    containerSize: containerSize,
    remaining: remaining
  }
  createSpice(spiceInfo)
}
const AddSpice = (createSpice) => (
  <div className="add-spice-container">
    <form>
      Name:
      <input type="text" id="name"></input>
      Size:
      <input type="text" id="containerSize"></input>
      Amount:
      <input type="text" id="remaining"></input>
      <button type="submit" onClick={handleClick}>Add!</button>
    </form>
  </div>
)

export default AddSpice;