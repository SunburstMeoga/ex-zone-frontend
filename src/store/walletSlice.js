// store/walletSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    address: null,
    isConnected: false,
};

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload;
            state.isConnected = true;
        },
        clearAddress: (state) => {
            state.address = null;
            state.isConnected = false;
        },
    },
});

export const { setAddress, clearAddress } = walletSlice.actions;

export default walletSlice.reducer;
