import * as types from '../constants/actionTypes';

const initialState = {
    totalSpices: 0,
    spiceRack: [],
    newSpice: '',
    synced: true,
};
const spicesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_SPICE:
            return{
                ...state,
                spiceRack: state.spiceRack.concat({
                    name: action.payload.name,
                    size: action.payload.size,
                    amount: action.payload.amount,
                }),
                totalSpices: state.totalSpices + 1,
                synced: false,
            };
        case types.DELETE_SPICE:
            
            // iterate through array, for Each object,  if id = xyz, delete object, and assign state to new updated spicerack.
            return{
                ...state,
                spiceRack: [],
                totalSpices = state.totalSpices - 1,
                synced: false,
            }
        case types.UPDATE_AMOUNT:
            return{
                ...state,
                spiceRack : 
            }
    }
};

export default spicesReducer;