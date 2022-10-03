import React from 'react';

const SpiceDisplay = ({ 
    name, 
    remaining, 
    containerSize, 
    id,
    incrementSpice,
    decrementSpice,
    deleteSpice
}) => (
    <div className='spice-display'>
        <p>
            <strong>{name}</strong>
            {remaining}
            {containerSize}
            {/* update Spice button instead of increment/decrement */}
            <button className='increment' onClick={() => incrementSpice(id)}>+</button>
            <button className='decrement' onClick={() => decrementSpice(id)}>-</button>
            <button className='delete' onClick={() => deleteSpice(id)}>Delete</button>
        </p>
    </div>   
)


export default SpiceDisplay;

