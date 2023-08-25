import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user', // The slice name
  initialState: {
    user: null,
}, // Initial state for the counter
  reducers: {
    login: (state,action)=>{
        state.user=action.payload;
    },
    logout: (state)=>{
        state.user=null;
    }
  },
});

export const { login,logout } = userSlice.actions;

export const selectUser=state=> state.user.user;

export default userSlice.reducer;
