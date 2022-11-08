import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    device: undefined,
}

export const counterSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setDevice: (state, action) => {
            return {...state, device: action.payload}
        },
    },
})




export const { setDevice } = counterSlice.actions

export default counterSlice.reducer;