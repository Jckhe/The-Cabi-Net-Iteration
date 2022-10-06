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
      console.log('inside USER reducer');
      const currUser = action.payload;
      return {
        ...state,
        username: currUser,
      };
    };

    case types.GENERATE_SPICE: {
      console.log('Generate Spice Reducer');
      const spiceList = action.payload;
      return {
        ...state,
        spiceRack: spiceList,
      };
    };

    case types.UPDATE_SPICE: {
      //create copy of spice rack from state
      console.log('inside UPDATE SPICE reducer');
      console.log('action payload', action.payload);
      // let updatedSpiceRack = state.spiceRack.slice();
      //find updated spice, replace old spice obj with new
      // console.log("SPICERACKBEFORE: ", updatedSpiceRack)
      // for (let i = 0; i < updatedSpiceRack.length; i++) {
      //   let current = updatedSpiceRack[i]
      //   if (current.id == action.payload.id){
      //     console.log('update reducer when id = existing id');
      //     updatedSpiceRack[i].remaining = action.payload.remaining;
      // } else if (action.payload.name){
      //       const spice = action.payload;
      //       console.log('new spice in update spice', spice);
      //       updatedSpiceRack.push(spice);
      //     }};
      // const newSpiceRack = updatedSpiceRack.map(spice => {
      //   if (spice.id === action.payload.id) {
      //     spice = {...spice, remaining: action.payload.remaining }
      //   }
      // })
      // console.log("SPICERACK AFTER: ", updatedSpiceRack)
      // updatedSpiceRack.forEach(spice => {
      //   if (spice.id === action.payload.id){
      //     console.log('update reducer when id = existing id');
      //     spice.remaining = action.payload.remaining;
      //   } else {
      //     const spice = action.payload;
      //     console.log(spice);
      //     updatedSpiceRack.push(spice);
      //   }
      // });
      for (let i = 0; i < state.spiceRack.length; i++) {
        if (state.spiceRack[i] == action.payload.id){
          console.log('update reducer when id = existing id');
          return {...state, spiceRack: (state.spiceRack[i].remaining = action.payload.remaining)};      
      } else if (action.payload.name){
            const spice = action.payload;
            return {
              ...state,
              spiceRack: state.spiceRack.push(spice),
            }}}
    };

    case types.DELETE_SPICE: {
      console.log('Delete Spice Reducer');
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