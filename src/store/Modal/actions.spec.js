import { SHOW_MODAL, HIDE_MODAL } from './constants'
import { showModal, hideModal } from './actions'

describe('modal actions', () => {

  it('showModal should create SHOW_MODAL action', () => {
    expect(showModal('DELETE_POST', { postId: 42 })).toEqual({
      type: SHOW_MODAL,
      payload: {
        modalType: 'DELETE_POST',
        modalProps: { 
          postId: 42 
        }
      }
    })
  })

  it('hideModal should create HIDE_MODAL action', () => {

    expect(hideModal()).toEqual({
      type: HIDE_MODAL,
    })
  })
})
