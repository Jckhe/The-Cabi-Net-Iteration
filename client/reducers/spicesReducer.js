import * as types from '../constants/actionTypes';

const initialState = {
    totalSpices: 0,
    spiceRack: [],
    newSpice: '',
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
                    id: action.paylod.id,
                }),
                totalSpices: state.totalSpices + 1, 
            };
        case types.DELETE_SPICE:
            let deletedSpiceRack = state.spiceRack.filter(spice => spice.id !== action.payload.id);
            return{
                ...state,
                spiceRack: deletedSpiceRack,
                totalSpices : state.totalSpices - 1,
            }
        case types.UPDATE_AMOUNT:
            let updatedSpiceRack = state.spiceRack.forEach(spice => {
                if (spice.id = action.payload.id){
                    spice = action.payload;
                }
            })
            return{
                ...state,
                spiceRack : updatedSpiceRack,
            }
    }
};

export default spicesReducer;