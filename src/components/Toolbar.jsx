import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/";

import ButtonAlgorithm from './ButtonAlgorithm.jsx';

const Toolbar = () => {

    const dispatch = useDispatch();

    const reduxState = useSelector(state => state);
    const { isRunning } = reduxState;

    const generateArray = (length) => {
        let array = [];
        while (array.length < length)
            array.push(Math.floor(Math.random() * 200) + 10);
        dispatch(actions.setArray(array));
        dispatch(actions.setSorted([]));
    }

    const [classMenu, setClassMenu] = useState('menu--show');
    const [loading, setLoading] = useState(true);
    const [sizeArray, setSizeArray] = useState(50);

    useEffect(() => {
        if (loading) {
            generateArray(sizeArray);
            setLoading(false);
        }
    }, []);

    const color = isRunning ? "rgba(214, 29, 29, 1)" : "white";
    const cursor = isRunning ? "not-allowed" : "pointer";

    return (
        <header className="header">
            <div className="top-bar">
                <div
                    onClick={
                        () => {
                            if (classMenu === 'menu') {
                                return setClassMenu('menu--show');
                            }
                            return setClassMenu('menu');
                        }
                    } className="icon-menu"
                >
                    <div className="icon-menu__bar">
                    </div>
                </div>
            </div>
            <nav>
                <div className={classMenu}>
                    <div className="menu__item"
                        style={{ cursor: cursor }}
                        onClick={() => !isRunning ? generateArray(sizeArray) : null}>
                        <div className="menu__link" style={{ color: color }}>
                            Generate new Array
                        </div>
                    </div>
                    <div className="menu__item" style={{ cursor: cursor }} >
                        <div className="menu__link" style={{ color: color }}>
                            Change Array Size & Sorting speed
                            <input
                                className="range"
                                type="range"
                                min="4"
                                value={sizeArray}
                                max="100"
                                disabled={isRunning ? "disabled" : null}
                                onChange={(e) => {
                                    generateArray(e.target.value);
                                    setSizeArray(e.target.value);
                                }}
                            >
                            </input>
                        </div>
                    </div>
                    <ButtonAlgorithm algorithm="hope">
                        Hope sort
                    </ButtonAlgorithm>
                    <ButtonAlgorithm algorithm="merge">
                        Merge sort
                    </ButtonAlgorithm>
                    <ButtonAlgorithm algorithm="quick">
                        Quick sort
                    </ButtonAlgorithm>
                    <ButtonAlgorithm algorithm="cocktail">
                        Cocktail sort
                    </ButtonAlgorithm>
                    <ButtonAlgorithm algorithm="bubble">
                        Bubble sort
                    </ButtonAlgorithm>
                </div>
            </nav>
        </header >
    )
}

export default Toolbar;