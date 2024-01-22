import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching house data
export const fetchHouses = createAsyncThunk("houses/fetchHouses", async () => {
  const response = await fetch("https://wizard-world-api.herokuapp.com/houses");
  const data = await response.json();
  return data;
});

const housesSlice = createSlice({
  name: "houses",
  initialState: {
    houses: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.houses = action.payload;
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default housesSlice.reducer;
