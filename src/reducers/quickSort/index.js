const initialStateOne = [];
const initialStateTwo = null;

const quickSort = (state = initialStateOne, action) => {
    switch (action.type) {
        case 'SET_QUICK':
            return action.array;
        default:
            return state;
    }
}

const pivot = (state = initialStateTwo, action) => {
    switch (action.type) {
        case 'SET_PIVOT':
            return action.pivot;
        default:
            return state;
    }
}


export { quickSort, pivot };