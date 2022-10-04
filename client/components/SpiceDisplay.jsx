import React from 'react';

const SpiceDisplay = ({ 
    name, 
    remaining, 
    containerSize, 
    id,
    updateSpice,
    deleteSpice
}) => {

    const handleClick = () => {
        const newRemaining = document.getElementById(`${id}`).value;
        const updatedSpice = {
            remaining: newRemaining,
            id: id
        };
        updateSpice(updatedSpice);
    }

    return (
        <div className='spice-display'>
            <p>
                <strong>{name}</strong>
                {remaining}
                {containerSize}
                <input type='number' id={`${id}`}></input>
                <button className='update' onClick={handleClick}>Update Amount</button>
                <button className='delete' onClick={() => deleteSpice(id)}>Delete</button>
            </p>
        </div>   
    )
}


export default SpiceDisplay;

