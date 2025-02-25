import authReducer from './authReducer';
import deckReducer from './deckReducer';
import cardReducer from './cardReducer';

const reducer = {
  auth: authReducer,
  deck: deckReducer,
  card: cardReducer,
};

export default reducer;
