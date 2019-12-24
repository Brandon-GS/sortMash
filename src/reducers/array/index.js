const initialState = [];

const setArray = (state = initialState, action) => {
    switch(action.type){
        case "SET_ARRAY":
            return action.array
        default:
            return state
    }
}

export default setArray;