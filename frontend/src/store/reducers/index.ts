import authReducer from "./authReducer";
import searchReducer from "./searchSlice";
import deckReducer from "./deckReducer";

const reducer = {
  auth: authReducer,
  search: searchReducer,
  deck: deckReducer,
};

export default reducer;
