import * as types from '../constants/CategoryActionTypes';
import { guid } from '../helpers';

const initialState = {
  categoryList: {categories: [], error: null, loading: false},
  newCategory: { category: null, error: null, loading: null }
};

export default function categories(state=initialState, action)  {
  let error, category;

  switch (action.type) {
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
    error = action.payload.data || action.payload.message || action.payload;
    return {
      ...state,
      categoryList: { categories: [], error, loading: false }
    }; 
  case types.RESET_CATEGORIES:
    return {
      ...state,
      categoryList: { categories: [], error: null, loading: false }
    };

  case types.CREATE_CATEGORY:
    return {
      ...state,
      newCategory: { ...state.newCategory, loading: true }
    };
  case types.CREATE_CATEGORY_SUCCESS:
    category = action.payload.data || action.payload;
    return {
      ...state,
      newCategory: { category, error: null, loading: false }
    };
  case types.CREATE_CATEGORY_FAILURE:
    error = action.payload.data || action.payload.message || action.payload;
    return {
      ...state,
      newCategory: { category: null, error, loading: false }
    };
  case types.RESET_NEW_CATEGORY:
    return {
      ...state,
      newCategory: { category: null, error: null, loading: false }
    };

  default:
    return state;
  }
}
