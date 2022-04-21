import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const intialCounterState: any = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: intialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action: any) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
