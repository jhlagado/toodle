import { SHOW_MODAL, HIDE_MODAL } from './constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return [
        ...state, 
        {
          modalType: action.payload.modalType,
          modalProps: action.payload.modalProps
        }
      ]
    case HIDE_MODAL:
      return state.slice(0, -1);
    default:
      return state
  }
}

