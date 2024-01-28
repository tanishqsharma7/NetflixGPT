import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSeachView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSeachView } = gptSlice.actions;
export default gptSlice.reducer;
