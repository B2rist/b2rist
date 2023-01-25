import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userChanged(state, action) {
      state.user = action.payload && {
        displayName: action.payload.displayName,
      };
    },
  },
});

const selectSelf = (state) => state.user;

export const selectUser = createSelector(selectSelf, (state) => state.user);

export const { userChanged } = userSlice.actions;

export default userSlice.reducer;
