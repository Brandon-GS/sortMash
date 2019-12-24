const initialState = "bubbleSort";

const setAlgorithm = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALGORITHM":
            return action.algorithm
        default:
            return state
    }
}

export default setAlgorithm;