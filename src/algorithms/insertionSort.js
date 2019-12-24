import {
    setRunning,
    setArray,
    setSorted,
    setSwappers,
    setInsertion
} from '../actions/'

const insertionSort = (stateArray, dispatch, speed) => {
    let array = stateArray.slice(0),
        toDispatch = [];

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1; 
        toDispatch.push([i]);
        while (j >= 0 && array[j] > key) {
            toDispatch.push([j, i, true]);
            array[j + 1] = array[j];
            j--;
            toDispatch.push([]);
        }
        array[j + 1] = key;
        toDispatch.push(array.slice(0));
    }
    console.log(array)
    handleDispatch(toDispatch, dispatch, array, speed);
}

const handleDispatch = (toDispatch, dispatch, array, speed) => {
    if (!toDispatch.length) {
        dispatch(setInsertion(array.map((num, index) => index)));
        setTimeout(() => {
            dispatch(setInsertion([]));
            dispatch(setSorted(array.map((num, index) => index)));
            dispatch(setRunning(false));
        }, 900);
        return;
    }

    let dispatchFunction = toDispatch[0].length > 3 ?
        setArray : toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
            setSwappers : setInsertion;

    dispatch(dispatchFunction(toDispatch.shift()));
    setTimeout(() => {
        handleDispatch(toDispatch, dispatch, array, speed);
    }, speed)

}

export default insertionSort;