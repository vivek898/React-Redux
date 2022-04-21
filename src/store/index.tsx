import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import cartSlice from "./cart-slice";
import counterSlice from './counter';
import uiSlice from "./ui-slice";


// const store = configureStore({ reducer: { counter: counterSlice, auth: authReducer } });
const store = configureStore({ reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer } });


export default store;

// =====================================Without using slice Reducer===================================== 
// const counterReducer = (state = intialState, action: any) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }
//     return state;
// };

// const store = createStore(counterReducer);