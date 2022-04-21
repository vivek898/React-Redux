import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartVisible = !state.cartVisible;
        },
        showNotification(state: any, action: any) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
