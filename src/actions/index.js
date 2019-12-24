export const setArray = (array) => {
    return {
        type: "SET_ARRAY",
        array
    }
}

export const setAlgorithm = (algorithm) => {
    return {
        type: "SET_ALGORITHM",
        algorithm
    }
}

export const setSorted = (sorted) => {
    return {
        type: "SET_SORTED",
        sorted
    }
}

export const setRunning = (isRunning) => {
    return {
        type: "SET_RUNNING",
        isRunning
    }
}

export const setSwappers = (swappers) => {
    return {
        type: "SET_SWAPPERS",
        swappers
    }
}

export const setBubble = (array) => {
    return {
        type: "SET_BUBBLE",
        array
    }
}

export const setHeap = (array) => {
    return {
        type: "SET_HEAP",
        array
    }
}

export const setMerge = (array) => {
    return {
        type: "SET_MERGE",
        array
    }
}

export const setQuick = (array) => {
    return {
        type: 'SET_QUICK',
        array
    }
}

export const setPivot = (pivot) => {
    return {
        type: "SET_PIVOT",
        pivot
    }
}

export const setCocktail = (array) => {
    return {
        type: "SET_COCKTAIL",
        array
    }
}

export const setInsertion = (array) => {
    return {
        type: "SET_INSERTION",
        array
    }
}

export const actions = {
    setArray,
    setAlgorithm,
    setSorted,
    setRunning,
    setSwappers,
    setBubble,
    setHeap,
    setMerge,
    setQuick,
    setPivot,
    setCocktail,
    setInsertion
}