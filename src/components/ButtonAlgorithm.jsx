import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/";

import heapSort from '../algorithms/heapSort'
import mergeSort from '../algorithms/mergeSort'
import quickSort from '../algorithms/quickSort'
import cocktailSort from '../algorithms/cocktailSort'
import bubbleSort from '../algorithms/bubbleSort';


const ButtonAlgorithm = ({ algorithm, children }) => {

    const dispatch = useDispatch();

    const reduxState = useSelector(state => state);
    const { array, isRunning } = reduxState;

    const sort = (algorithm, array, speed) => {
        let doSort = algorithm === "bubble" ?
            bubbleSort : algorithm === "hope" ?
                heapSort : algorithm === "merge" ?
                    mergeSort : algorithm === "quick" ?
                        quickSort : algorithm === "cocktail" ?
                            cocktailSort : null;
        dispatch(actions.setSorted([]));
        dispatch(actions.setRunning(true));
        doSort(array, dispatch, speed);
    }

    const speed = 570 - Math.pow(array.length, 2) > 0 ?
        570 - Math.pow(array.length, 2) : 0;
    const color = isRunning ? "rgba(214, 29, 29, 1)" : "white";
    const cursor = isRunning ? "not-allowed" : "pointer";

    return (
        <div className="menu__item" style={{ cursor: cursor }}
            onClick={
                !isRunning
                    ? () => {
                        sort(algorithm, array, speed);
                    } : null
            }
        >
            <div className="menu__link" style={{ color: color }}>
                {children}
            </div>
        </div>
    )

}

export default ButtonAlgorithm;