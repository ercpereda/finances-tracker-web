import { combineReducers } from 'redux';
import accounts from './accounts';
import categories from './categories';

const rootReducer = combineReducers({
  accounts,
  categories
});

export default rootReducer;
