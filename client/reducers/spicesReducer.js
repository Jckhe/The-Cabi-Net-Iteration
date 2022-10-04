import * as types from '../constants/actionTypes';

const initialState = {
    totalSpices: 0,
    spiceRack: [],
    newSpice: '',
};
const spicesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_SPICE:
            let addedSpiceRack = state.spiceRack.slice();
            addedSpiceRack.push(action.payload);
            return{
                ...state,
                spiceRack: addedSpiceRack,
                totalSpices: state.totalSpices + 1, 
            };
        case types.DELETE_SPICE:
            let deletedSpiceRack = state.spiceRack.slice();
            deletedSpiceRack = deletedSpiceRack.filter(spice => spice.id !== action.payload);
            return{
                ...state,
                spiceRack: deletedSpiceRack,
                totalSpices : state.totalSpices - 1,
            }
        case types.UPDATE_AMOUNT:
            let updatedSpiceRack = state.spiceRack.slice()
            updatedSpiceRack.forEach(spice => {
                if (spice.id === action.payload.id){
                    spice.remaining = action.payload.remaining;
                }
            })
            return{
                ...state,
                spiceRack : updatedSpiceRack,
            }

        case types.GET_SPICES:
            let newSpiceRack = action.payload;
            return{
                ...state,
                spiceRack : newSpiceRack
            }
        
        default: {
            return state
        }
    }
};

export default spicesReducer;