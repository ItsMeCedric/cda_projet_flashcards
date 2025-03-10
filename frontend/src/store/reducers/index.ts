import authReducer from "./authReducer";
import searchReducer from "./searchSlice";
import accountReducer from "./accountSlice";

const reducer = {
  auth: authReducer,
  search: searchReducer,
  account: accountReducer,
};

export default reducer;
