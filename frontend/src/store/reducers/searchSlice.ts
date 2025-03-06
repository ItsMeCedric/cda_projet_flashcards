import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchContent: string;
  selectedThemes: string[];
}

const initialState: SearchState = {
  searchContent: "",
  selectedThemes: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchContent(state, action: PayloadAction<string>) {
      state.searchContent = action.payload;
    },
    toggleTheme: (state, action: PayloadAction<string>) => {
      const theme = action.payload;
      if (state.selectedThemes.includes(theme)) {
        state.selectedThemes = state.selectedThemes.filter((t) => t !== theme);
      } else {
        state.selectedThemes.push(theme);
      }
    },
    resetThemes: (state) => {
      state.selectedThemes = [];
    },
  },
});

export const { setSearchContent, toggleTheme, resetThemes } = searchSlice.actions;
export default searchSlice.reducer;
