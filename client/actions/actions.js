// import all actionType constants
import * as types from '../constants/actionTypes.js';
import axios from 'axios';

export const addSpice = spiceInfo => (dispatch, getState) => (
    axios.put('/spices', {spiceInfo}
        .then({
            type: types.ADD_SPICE,
            payload: data,
        })
        .catch(console.log(error),
        )
    )
);

export const deleteSpice = spiceInfo => (dispatch, getState) => {
    axios.delete('/spices', {spiceInfo}
        .then({
            type: types.DELETE_SPICE,
            payload: data.id,
        })
        .catch(console.log(error),
        ))
};

export const updateAmount = spiceInfo => (dispatch, getState) => {
    axios.patch('/spices', {spiceInfo}
        .then({
            type: types.UPDATE_AMOUNT,
            payload: data.id,
        })
        .catch(console.log(error),
        ))
});

// export const syncSpices = data => ({
//   axios.put('/spices', getState().
// })

export const getSpices = () => (dispatch) => {
    axios.get('/spices')
        .then(({data}) => {
            dispatch({
                type: types.GET_SPICES,
                payload: data,
            })
        })
        .catch(console.log(error));
}



