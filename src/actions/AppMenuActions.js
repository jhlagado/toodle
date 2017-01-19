import makeActionCreator from './makeActionCreator.js'

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = makeActionCreator(SHOW_MODAL)
export const sideModal = makeActionCreator(HIDE_MODAL)
