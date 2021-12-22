import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StadiumApi } from '../api/stadium-api';

const initialState = {
  cells: [],
  places: [],
  isLoading: false,
};

// async helpers

// async thunks
export const requestCells = createAsyncThunk(
  'client/requestCells',
  async () => {
    return await StadiumApi.getCells();
  },
);

export const requestPlaces = createAsyncThunk(
  'client/requestPlaces',
  async (cellId, slice) => {
    return await StadiumApi.getPlaces(cellId);
  },
);

export const requestBuy = createAsyncThunk(
  'client/requestBuy',
  async (params, slice) => {
    const { cellId, id } = params;
    return await StadiumApi.buyTicket(cellId, id);
  },
);

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestCells.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(requestCells.fulfilled, (state, action) => {
      state.cells = action.payload;
      state.isLoading = false;
    });
    builder.addCase(requestCells.rejected, (state, action) => {
      console.log(action.error.message);
      state.isLoading = false;
    });
    
    builder.addCase(requestPlaces.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(requestPlaces.fulfilled, (state, action) => {
      state.places = action.payload;
      state.isLoading = false;
    });
    builder.addCase(requestPlaces.rejected, (state, action) => {
      console.log(action.error.message);
      state.isLoading = false;
    });
    
    builder.addCase(requestBuy.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(requestBuy.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(requestBuy.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default clientSlice.reducer;

// export const {} = clientSlice.actions;

export const selectCells = state => state.cells;
export const selectPlaces = state => state.places;
export const selectLoading = state => state.isLoading;
