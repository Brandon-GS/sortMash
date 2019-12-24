const initialState = [];

const setSorted = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SORTED":
            if (action.sorted.length) {
                return state.concat(action.sorted);
            } 
            return [];
        default:
            return state;
    }
}

export default setSorted;