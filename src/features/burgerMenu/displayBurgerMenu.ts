import { createSlice } from '@reduxjs/toolkit';

const burgerInicialState = {
    value: false,
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
export const selectBurgerMenu = (state) => state.burgerMenu.value

export default burgerMenuSlice.reducer;
