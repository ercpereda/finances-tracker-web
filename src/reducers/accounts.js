import { ADD_ACCOUNT } from '../constants/AccountActionTypes';
import { guid } from '../helpers';

import fakeAccounts from '../fakes/fake-accounts';

const initialState = fakeAccounts; 

export default function accounts(state=initialState, action)  {
  switch (action.type) {
  case ADD_ACCOUNT:
    return  [
      ...state, 
      {
        id: guid(),
        ...action.account
      }
    ];
  default:
    return state;
  }
}
