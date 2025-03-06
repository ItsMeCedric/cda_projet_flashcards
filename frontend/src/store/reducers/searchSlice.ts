import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchContent: string;
}

const initialState: SearchState = {
  searchContent: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchContent(state, action: PayloadAction<string>) {
      state.searchContent = action.payload;
    },
  },
});

export const { setSearchContent } = searchSlice.actions;
export default searchSlice.reducer;
