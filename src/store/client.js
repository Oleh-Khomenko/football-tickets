import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StadiumApi } from '../api/stadium-api';

const initialState = {
  cells: [],
};

// async helpers

// async thunks
export const requestCells = createAsyncThunk(
  'client/requestCells',
  async (id, slice) => {
    return await StadiumApi.getCells();
  },
);

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestCells.fulfilled, (state, action) => {
      state.cells = action.payload.cellsData;
    });
    builder.addCase(requestCells.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export default clientSlice.reducer;

// export const {} = clientSlice.actions;

export const selectCells = state => state.cells;
