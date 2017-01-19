import Immutable, { Map } from 'immutable';
import { SHOW_MODAL, HIDE_MODAL} from '../actions/AppMenuActions';

const initialState = Map({
  modalType: null,
  modalProps: {}
})

const appMenuReducers = (state = initialState, action) => {

  switch (action.type) {
    case SHOW_MODAL:
      return state.merge({
        modalType: action.modalType,
        modalProps: action.modalProps
      });
    case HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

export default appMenuReducers
