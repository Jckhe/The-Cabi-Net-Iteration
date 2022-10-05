import * as types from '../constants/actionTypes';

const initialState = {
    spiceRack: [],
    loggedIn: false,
    username: '',
};

const spicesReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOGGED_IN: {
      return {
        ...state,
        loggedIn: true ? false: true,
      };
    };
    case types.USER: { 
      const currUser = action.payload.username;
      return {
        ...state,
        username: currUser,
      };
    };
    case types.GENERATE_SPICE: {
      const spiceList = action.payload;
      return {
        ...state,
        spiceRack: spiceList,
      };
    };
    case types.UPDATE_SPICE: {
      //create copy of spice rack from state
      let updatedSpiceRack = state.spiceRack;
      //find updated spice, replace old spice obj with new
      updatedSpiceRack.forEach(spice => {
        if (spice.id === action.payload.id){
          spice = action.payload;
        }});
      return {
        ...state,
        spiceRack : updatedSpiceRack,
      };
    };
    case types.DELETE_SPICE: {
      let updatedSpiceRack = state.spiceRack;
      updatedSpiceRack = updatedSpiceRack.filter(spice => spice.id !== action.payload);
      return {
        ...state,
        spiceRack: updatedSpiceRack,
      };
    };
    default: {
      return state
    };
  };
};

export default spicesReducer;
// case types.ADD_SPICE:
        //     let addedSpiceRack = state.spiceRack.slice();
        //     addedSpiceRack.push(action.payload);
        //     return{
        //         ...state,
        //         spiceRack: addedSpiceRack,
        //         totalSpices: state.totalSpices + 1, 
        //     };

        // case types.DELETE_SPICE:
        //     let deletedSpiceRack = state.spiceRack.slice();
        //     deletedSpiceRack = deletedSpiceRack.filter(spice => spice.id !== action.payload);
        //     return {
        //         ...state,
        //         spiceRack: deletedSpiceRack,
        //         totalSpices : state.totalSpices - 1,
        //     };

        // case types.UPDATE_AMOUNT:
        //     let updatedSpiceRack = state.spiceRack.slice();
        //     updatedSpiceRack.forEach(spice => {
        //         if (spice.id === action.payload.id){
        //             spice.remaining = action.payload.remaining;
        //         };
        //     });
        //     return {
        //         ...state,
        //         spiceRack : updatedSpiceRack,
        //     };

        // case types.GET_SPICES:
        //     let newSpiceRack = action.payload;
        //     return {
        //         ...state,
        //         spiceRack : newSpiceRack
        //     };