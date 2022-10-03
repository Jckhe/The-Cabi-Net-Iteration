// import all actionType constants
import * as types from '../constants/actionTypes.js';
import axios from 'axios';


// To backend team: yes we will need to have updated spice info sent back from the back end; we can access spice by name, but we want to access by ID created in DB in the the case that there are replicates of each spice. 

export const addSpice = spiceInfo => (dispatch) => (
    axios.put('/spice/HACKxolotl', {spiceInfo}
        .then( data => {
            dispatch({
            type: types.ADD_SPICE,
            payload: data,
        })})
        .catch(console.log(error),
        )
    )
);

// Is it possible to send back the ID that was deleted? 
export const deleteSpice = spiceInfo => (dispatch) => {
    axios.delete('/spice', {spiceInfo}
        .then( data => {
            dispatch({
            type: types.DELETE_SPICE,
            payload: data,
        })})
        .catch(console.log(error),
        ))
};

export const updateAmount = spiceInfo => (dispatch) => {
    axios.patch('/spice', {spiceInfo}
        .then( data => {
            dispatch({
            type: types.UPDATE_AMOUNT,
            payload: data,
        })})
        .catch(console.log(error),
        ))
};

// export const syncSpices = data => ({
//   axios.put('/spices', getState().
// })

export const getSpices = () => (dispatch) => {
    axios.get('/spice/HACKxolotl')
        .then((data) => {
            dispatch({
                type: types.GET_SPICES,
                payload: data,
            })
        })
        .catch(console.log(error));
}



