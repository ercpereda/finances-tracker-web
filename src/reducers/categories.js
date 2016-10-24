import * as types from '../constants/CategoryActionTypes';
import { guid } from '../helpers';

const initialState = {categoryList: {categories: [], error: null, loading: false}};

export default function categories(state=initialState, action)  {
  switch (action.type) {
  case types.CREATE_CATEGORY:
    return [
        ...state, 
        {
          id: guid(),
          ...action.category
        }
      ];
  case types.FETCH_CATEGORIES:
    return {
      ...state,
      categoryList: { categories: [], error: null, loading: true }
    };
  case types.FETCH_CATEGORIES_SUCCESS:
    return {
      ...state,
      categoryList: { categories: action.payload, error: null, loading: false }
    };
  case types.FETCH_CATEGORIES_FAILURE:
    const error = action.payload.data || action.payload.message || action.payload;
    return {
      ...state,
      categoryList: { categories: [], error, loading: false }
    }; 
  case types.RESET_CATEGORIES:
    return {
      ...state,
      categoryList: { categories: [], error: null, loading: false }
    };
  default:
    return state;
  }
}
