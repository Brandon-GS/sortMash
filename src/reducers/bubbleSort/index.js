const initialState = [];

const setBubble = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BUBBLE":
            return action.array
        default:
            return state
    }
}

export default setBubble;
