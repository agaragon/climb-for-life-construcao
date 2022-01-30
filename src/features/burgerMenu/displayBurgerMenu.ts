import { createSlice } from '@reduxjs/toolkit';

const burgerInicialState = {
    value: true,
};

export const burgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState: burgerInicialState,
    reducers: {
        showSideBar: (state) => {
            state.value = true;
        },
        hideSideBar: (state) => {
            state.value = false;
        }
    },
});

export const { showSideBar, hideSideBar } = burgerMenuSlice.actions;
export const selectBurgerMenu = (state) => {
    console.log(state.burgerMenu.value)
    return state.burgerMenu.value
};

export default burgerMenuSlice.reducer;
