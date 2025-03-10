import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../hooks/redux";

// const { user } = useAppSelector((state) => state.auth);
// console.log(user);

interface AccountState {
  dataAccount: { email: string; username: string; password: string };
}

const initialState: AccountState = {
  dataAccount: { email: "", username: "", password: "" },
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
