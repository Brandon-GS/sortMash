const initialState = false;

const setRunning = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RUNNING":
            return action.isRunning
        default:
            return state
    }

}

export default setRunning;