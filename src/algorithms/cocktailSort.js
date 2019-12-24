import {
    setArray,
    setSorted,
    setSwappers,
    setRunning,
    setCocktail
} from '../actions'

function cocktailSort(stateArray, dispatch, speed) {
    let array = stateArray.slice(0),
        toDispatch = [],
        sorted = false,
        roundLeft = 0,
        roundRight = 0;

    while (!sorted) {
        for (let i = roundLeft; i < array.length - 1 - roundRight; i++) {
            toDispatch.push([i, i + 1]);
            if (array[i] > array[i + 1]) {
                toDispatch.push([i, i + 1, true]);
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
                sorted = false;
                toDispatch.push(array.slice(0));
                toDispatch.push([]);
            }
        }
        toDispatch.push([true, array.length - 1 - roundRight]);
        roundRight++;
        if (sorted)
            break;
        sorted = true;
        for (let j = array.length - 1 - roundRight; j > roundLeft; j--) {
            toDispatch.push([j, j - 1]);
            if (array[j - 1] > array[j]) {
                toDispatch.push([j, j - 1, true]);
                let aux = array[j];
                array[j] = array[j - 1];
                array[j - 1] = aux;
                sorted = false;
                toDispatch.push(array.slice(0));
                toDispatch.push([]);
            }
        }
        toDispatch.push([true, roundLeft]);
        roundLeft++;
    }
    handleDispatch(toDispatch, dispatch, array, speed);
}

function handleDispatch(toDispatch, dispatch, array, speed) {
    if (!toDispatch.length) {
        dispatch(setCocktail(array.map((num, index) => index)));
        setTimeout(() => {
            dispatch(setCocktail([]));
            dispatch(setSorted(array.map((num, index) => index)));
            dispatch(setRunning(false));
        }, 900);
        return;
    }

    let dispatchFunction = toDispatch[0].length > 3 ?
        setArray : toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
            setSwappers : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean" ?
                setSorted : setCocktail;

    dispatch(dispatchFunction(toDispatch.shift()));
    setTimeout(() => {
        handleDispatch(toDispatch, dispatch, array, speed);
    }, speed);

}

export default cocktailSort;