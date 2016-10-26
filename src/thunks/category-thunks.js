import { FETCH_CATEGORIES,  CREATE_CATEGORY } from '../constants/CategoryActionTypes.js'
import { fetchCategoriesSuccess, fetchCategoriesFailure, 
         createCategorySuccess, createCategoryFailure } from '../actions/category-actions.js' 

import categories from '../fakes/fake-categories';

export const fetchCategories = () => dispatch => {
  dispatch({ type: FETCH_CATEGORIES });
  setTimeout(() => {
    if (Math.random() < 0.5) {
      dispatch(fetchCategoriesSuccess(categories));
    } else {
      dispatch(fetchCategoriesFailure('One error'));
    }
  }, 1000);
};

export const createCategory = category => dispatch => {
  console.log(category);
  dispatch({ type: CREATE_CATEGORY });
  setTimeout(() => {
    if (Math.random() < 0.5) {
      dispatch(createCategorySuccess(category));
    } else {
      dispatch(createCategoryFailure('The category could not be created'));
    }
  }, 3000);
};
