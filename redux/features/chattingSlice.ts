import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initScriptLoader } from 'next/script';

type InitialState = {
    value: ChatState;
}

type ChatState = {

}

cponst initialState = {
    value: {
        message: ''
    }
}

export const chattingSlice = createSlice({
    name: 'chatting',
    initialState,
    reducers: {

    }
})