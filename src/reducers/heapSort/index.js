const initialState = [];

const setHeap = (state = initialState, action) => {
    switch(action.type){
        case "SET_HEAP":
            return action.array
        default: 
            return state
    }
}

export default setHeap;