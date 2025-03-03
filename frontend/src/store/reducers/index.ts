import authReducer from "./authReducer";
import searchReducer from "./searchSlice";

const reducer = {
  auth: authReducer,
  search: searchReducer,
};

export default reducer;
