import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        allUsers: []
    },
    reducers: {
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUser: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { setUser, removeUser, setAllUsers } = userSlice.actions;
export default userSlice.reducer;