import React from 'react';
import { useSelector } from "react-redux";
import $ from 'jquery';

const Body = () => {

    const reduxState = useSelector(state => state);
    const { array, swappers, sorted, pivot, bubbleSort, mergeSort, quickSort, heapSort, cocktailSort, insertionSort } = reduxState;

    const numWidth = Math.floor($(document).width() / (array.length * 3));
    const width = `${numWidth}px`;
    const numMargin = array.length < 5 ?
        10 : array.length < 8 ?
            8 : array.length < 11 ?
                6 : array.length < 20 ?
                    4 : array.length < 50 ?
                        3.5 : array.length < 100 ?
                            3 : array.length < 130 ?
                                2.5 : 2;
    const margin = `${numMargin}px`;
    const color = numWidth > 20 ? "white" : "transparent";
    const numFont = numWidth > 70 ?
        20 : numWidth > 60 ?
            18 : numWidth > 50 ?
                16 : numWidth > 40 ?
                    14 : numWidth > 30 ?
                        12 : numWidth > 20 ?
                            10 : 8;
    const fontSize = `${numFont}px`

    return (
        <div id="bodyContainer">
            {array.length ? array.map((number, index) => {
                const backgroundColor = swappers.includes(index) ?
                    /* Rojo */"rgba(214, 48, 49,0.8)" : bubbleSort.includes(index) ||
                        quickSort.includes(index) || heapSort.includes(index) ||
                        mergeSort.includes(index) || cocktailSort.includes(index) || insertionSort.includes(index) ?
                        /* Color verde */ "rgba(106, 176, 76,0.8)" : pivot === index ?
                        /* Color amarillo */    "rgba(237, 234, 59, 0.8)" : sorted.includes(index) ?
                        /* Color morado */  "rgba(108, 92, 231,1.0)" : "rgba(0, 168, 255,0.8)";
                return <div
                    className="arrayElement"
                    key={index}
                    style={{ height: `${number * 3}px`, width: width, marginLeft: margin, marginRigh: margin, backgroundColor: backgroundColor, color: color, fontSize: fontSize }}>
                    {number}
                </div>
            }) : null
            }
        </div>
    )

}

export default Body;