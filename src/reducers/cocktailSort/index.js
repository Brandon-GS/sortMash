const initalState = [];

const cocktailSort = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_COCKTAIL':
            return action.array;
        default:
            return state;
    }
}

export default cocktailSort;