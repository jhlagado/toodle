// import Immutable from 'immutable';
import { MENU_SHOW_LOGOUT, MENU_HIDE_MODAL} from '../actions/AppMenuActions';

const initialState = {
  modalType: null,
  modalProps: {}
}

const appMenuReducers = (state = Immutable.fromJS(initialState), action) => {
  switch (action.type) {
    case MENU_SHOW_LOGOUT:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }
    case MENU_HIDE_MODAL:
      return initialState
    default:
      return state
  }
}


export default appMenuReducers
