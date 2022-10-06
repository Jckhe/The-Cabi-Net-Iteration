// import all actionType constants
import * as types from '../constants/actionTypes.js';


export const loggedInActionCreator = () => ({
  type: types.LOGGED_IN,
});

export const logOutActionCreator = () => ({
  type: types.LOG_OUT,
});

export const userActionCreator = (username) => ({
  type: types.USER,
  payload: username,
});

export const generateSpiceListActionCreator = (spiceList) => ({
  type: types.GENERATE_SPICE,
  payload: spiceList,
});

//the spiceObj is the entire returned spice object from the database
export const updateSpiceActionCreator = (spiceObj) => ({
  type: types.UPDATE_SPICE,
  payload: spiceObj,
});

//id is the id of the spice from the database
export const deleteSpiceActionCreator = (id) => ({
  type: types.DELETE_SPICE,
  payload: id,
});


// export const addSpiceActionCreator = spiceInfo => (dispatch) => {
//     console.log("addspice dispatch");
//     axios.post('http://localhost:3000/spice/HACKxolotl', {spiceInfo})
//         .then(data => {
//             dispatch({
//             type: types.ADD_SPICE,
//             payload: data.data,
//         })})
//         .catch(error => console.log(error))
//     };
// // Is it possible to send back the ID that was deleted? 
// export const deleteSpiceActionCreator = id => (dispatch) => {
//     const ID = { id: id }
//     axios.delete('/spice', { data: ID })
//         .then( data => {
//             dispatch({
//             type: types.DELETE_SPICE,
//             payload: id,
//         })})
//         .catch(error => console.log(error))
// };

// export const updateAmountActionCreator = spiceInfo => (dispatch) => {
//     axios.patch('/spice', { spiceInfo })
//         .then(data => {
//             dispatch({
//             type: types.UPDATE_AMOUNT,
//             payload: spiceInfo,
//         })})
//         .catch(error => console.log(error))
// };

// // export const syncSpices = data => ({
// //   axios.put('/spices', getState().
// // })

// export const getSpicesActionCreator = () => (dispatch) => {
//     axios.get('http://localhost:3000/spice/HACKxolotl')
//         .then( data => {
//             console.log(data)
//             dispatch({
//                 type: types.GET_SPICES,
//                 payload: data.data,
//             })
//         })
//         .catch(error => console.log(error));
// }



