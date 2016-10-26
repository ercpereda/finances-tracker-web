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

export const createCategorySuccess = category => ({
  type: types.CREATE_CATEGORY_SUCCESS,
  payload: category
});
export const createCategoryFailure = error => ({
  type: types.CREATE_CATEGORY_FAILURE,
  payload: error
});
export const resetNewForm = () => ({
  type: types.NEW_CATEGORY_RESET
});
