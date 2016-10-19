import { TOGGLE_DRAWER } from '../constants/HeaderActionTypes';

const initialState = {
  showDrawer: false
};

export default function header(state=initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        showDrawer: !state.showDrawer
      }
    default:
      return state;
  }
}
