import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: '',
  userId: '',
  name: '',
  accessToken: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.id = action.payload.id;
      state.specialkey = action.payload.specialkey;
      state.accessToken = action.payload.accessToken;
      state.name = action.payload.name;
    },
  },
});

// action
export const setUserInfo = authSlice.actions.setUserInfo;

// state
export const accessToken = state => state.accessToken;
export const id = state => state.id;
export const name = state => state.name;
// export const name = state => state.name;

// reducer
export default authSlice.reducer;
