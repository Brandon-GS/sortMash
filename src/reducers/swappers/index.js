const initialState = [];

const setSwappers = (state = initialState, action) => {
    switch(action.type){
        case "SET_SWAPPERS":
            if(action.swappers.length){
                return state.concat(action.swappers);
            }
            return [];
        default:
            return state;
    }
}

export default setSwappers;