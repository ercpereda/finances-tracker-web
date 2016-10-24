import { FETCH_CATEGORIES } from '../constants/CategoryActionTypes.js'
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions/category-actions.js' 

import categories from '../fakes/fake-categories';

export const fetchCategories = () => dispatch => {
  dispatch({ type: FETCH_CATEGORIES });
  setTimeout(() => {
    if (Math.random() < 0.5) {
      dispatch(fetchCategoriesSuccess(categories));
    } else {
      dispatch(fetchCategoriesFailure('One error'));
    }
  }, 5000);
};
