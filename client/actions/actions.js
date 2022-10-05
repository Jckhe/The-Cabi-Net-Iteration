// import all actionType constants
import * as types from '../constants/actionTypes.js';
import axios from 'axios';


// To backend team: yes we will need to have updated spice info sent back from the back end; we can access spice by name, but we want to access by ID created in DB in the the case that there are replicates of each spice. 


export const loggedInActionCreator = () => ({
    type: types.LOGGED_IN,
});

export const addSpice = spiceInfo => (dispatch) => {
    console.log("addspice dispatch");
    axios.post('http://localhost:3000/spice/HACKxolotl', {spiceInfo})
        .then(data => {
            dispatch({
            type: types.ADD_SPICE,
            payload: data.data,
        })})
        .catch(error => console.log(error))
    };

// Is it possible to send back the ID that was deleted? 
export const deleteSpice = id => (dispatch) => {
    const ID = { id: id }
    axios.delete('/spice', { data: ID })
        .then( data => {
            dispatch({
            type: types.DELETE_SPICE,
            payload: id,
        })})
        .catch(error => console.log(error))
};

export const updateAmount = spiceInfo => (dispatch) => {
    axios.patch('/spice', { spiceInfo })
        .then(data => {
            dispatch({
            type: types.UPDATE_AMOUNT,
            payload: spiceInfo,
        })})
        .catch(error => console.log(error))
};

// export const syncSpices = data => ({
//   axios.put('/spices', getState().
// })

export const getSpices = () => (dispatch) => {
    axios.get('http://localhost:3000/spice/HACKxolotl')
        .then( data => {
            console.log(data)
            dispatch({
                type: types.GET_SPICES,
                payload: data.data,
            })
        })
        .catch(error => console.log(error));
}



