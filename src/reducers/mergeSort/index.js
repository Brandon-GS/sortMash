const initialState = [];

const setMerge = (state = initialState, action) => {
    switch(action.type){
        case 'SET_MERGE':
            return action.array;
        default:
            return state;
    }
}

export default setMerge