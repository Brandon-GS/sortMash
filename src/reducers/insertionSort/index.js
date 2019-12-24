const initialState = [];

const insertionSort = (state = initialState, action) => {
    switch(action.type){
        case 'SET_INSERTION':
            return action.array;
        default:
            return state;
    }
}

export default insertionSort;