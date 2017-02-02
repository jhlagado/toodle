import { createAction } from 'redux-actions';
import { SHOW_MODAL, HIDE_MODAL } from './constants';

export const showModal = createAction(SHOW_MODAL, (type, props) => {
    return {
        modalType: type,
        modalProps: props,
    }
});
export const hideModal = createAction(HIDE_MODAL);
