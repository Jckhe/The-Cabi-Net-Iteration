import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpiceDisplay from '../components/SpiceDisplay';


// do we need to import actions into this component? 

// on mount, make a get request to the database?

// I believe we need to have use mapStateToProps and mapDispatchToProps in this component. then push prop drill them down to SpiceDisplay

const SpiceContainer = () => {

  const mapStateToProps = ({ spices }) => ({
    spiceRack: spices.spiceRack
  })

  // NEEDS FUNCTIONS FROM 'actions.js' INSIDE 'dispatch()' ONCE THEY HAVE NAMES
  const mapDispatchToProps = dispatch => ({
    incrementSpice : (id) => dispatch(XX),
    decrementSpice : (id) => dispatch(XX),
    deleteSpice : (id) => dispatch(XX)
  })

  const spiceArray = [];
  spiceRack.forEach((spice) => {
    spiceArray.push(<SpiceDisplay name={spice.name} remaining={spice.remaining} containerSize={spice.containerSize} id={spice.id} incrementSpice={props.incrementSpice} decrementSpice={props.decrementSpice} deleteSpice={props.deleteSpice} />)
  })

  return (
    (
      <div className='spice-container'>
        {spiceArray}
      </div>
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiceContainer);