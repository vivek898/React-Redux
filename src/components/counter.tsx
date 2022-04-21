import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counter";

const Counter = () => {
    const counter: any = useSelector<any>(state => state.counter.counter);
    const show: any = useSelector<any>(state => state.counter.showCounter);
    const dispatch = useDispatch();
    const increaseHandler = () => {
        dispatch(counterAction.increase(5));
    };
    const incrementHandler = () => {
        dispatch(counterAction.increment());
    };
    const decrementHandler = () => {
        dispatch(counterAction.decrement());
    }
    const toggleHandler = () => {
        dispatch(counterAction.toggleCounter());
    }
    return (
        <div className="main">
            <div className="heaing">
                {show && <h1>{counter}</h1>}
            </div>
            <div className="buttons">
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <div className="toggle">
                <button onClick={toggleHandler}>Toggle</button>
            </div>
        </div>
    )
};

export default Counter;