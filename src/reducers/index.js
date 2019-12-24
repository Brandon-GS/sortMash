import { combineReducers } from 'redux';
import array from '../reducers/array';
import algorithm from '../reducers/algorithm';
import isRunning from '../reducers/running';
import swappers from '../reducers/swappers';
import sorted from '../reducers/sorted';
import bubbleSort from '../reducers/bubbleSort';
import heapSort from '../reducers/heapSort';
import mergeSort from '../reducers/mergeSort';
import { quickSort, pivot } from '../reducers/quickSort';
import cocktailSort from '../reducers/cocktailSort';
import insertionSort from '../reducers/insertionSort';

export default combineReducers({
    algorithm,
    array,
    isRunning,
    swappers,
    sorted,
    bubbleSort,
    heapSort,
    mergeSort,
    quickSort,
    cocktailSort,
    insertionSort,
    pivot
});