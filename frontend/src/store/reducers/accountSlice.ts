import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  dataAccount: { email: string; username: string; password: string; profilePicture: string };
}

const initialState: AccountState = {
  dataAccount: { email: "", username: "", password: "", profilePicture: "" },
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setDataAccount(state, action: PayloadAction<any>) {
      state.dataAccount = action.payload;
    },
  },
});

export const { setDataAccount } = accountSlice.actions;
export default accountSlice.reducer;
