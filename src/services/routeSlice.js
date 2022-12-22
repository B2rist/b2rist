import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { getRoutesByIdFunction, getRoutesFunction } from 'services/firebaseCallFunctions';

const initialState = {
  routeList: [],
  route: null,
};

export const getRoutes = createAsyncThunk('route/getRoutes', async (request, { rejectWithValue }) => {
  try {
    const response = await getRoutesFunction(request);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const getRouteById = createAsyncThunk('route/getRouteById', async (request, { rejectWithValue }) => {
  try {
    const response = await getRoutesByIdFunction(request);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const routeSlice = createSlice({
  name: 'route',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRoutes.fulfilled, (state, action) => {
        state.routeList = action.payload;
      })
      .addCase(getRouteById.fulfilled, (state, action) => {
        state.route = action.payload;
      });
  },
});

const selectSelf = (state) => state.route;

export const selectRouteList = createSelector(selectSelf, (state) => state.routeList);

export const selectRoute = createSelector(selectSelf, (state) => state.route);

export default routeSlice.reducer;
