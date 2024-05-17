import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks for async actions
export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 1; 
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 1;
});

// Slice
const ageSlice = createSlice({
  name: 'age',
  initialState: {
    age: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.loading = false;
      })
      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age -= action.payload;
        state.loading = false;
      })
      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;

