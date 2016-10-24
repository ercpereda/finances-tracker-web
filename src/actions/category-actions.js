import * as types from '../constants/CategoryActionTypes';

export const createCategory = category => ({ 
  type: types.CREATE_CATEGORY, 
  category });

export const fetchCategoriesSuccess = categories => ({ 
  type: types.FETCH_CATEGORIES_SUCCESS, 
  payload: categories
});

export const fetchCategoriesFailure = error => ({
  type: types.FETCH_CATEGORIES_FAILURE,
  payload: error
});
