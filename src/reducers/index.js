import { combineReducers } from 'redux';
import accounts from './accounts';
import categories from './categories';
import header from './header';

const rootReducer = combineReducers({
  accounts,
  categories,
  header
});

export default rootReducer;
