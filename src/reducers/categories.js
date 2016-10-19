import { CREATE_CATEGORY } from '../constants/CategoryActionTypes';
import { guid } from '../helpers';

import fakeCategories from '../fakes/fake-categories';

const initialState = fakeCategories;

export default function categories(state=initialState, action)  {
  switch (action.type) {
  case CREATE_CATEGORY:
    return [
        ...state, 
        {
          id: guid(),
          ...action.category
        }
      ];
  default:
    return state;
  }
}
