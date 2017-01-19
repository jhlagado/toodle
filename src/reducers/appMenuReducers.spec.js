import { Map } from 'immutable';
import { SHOW_MODAL, HIDE_MODAL} from '../actions/AppMenuActions';
import appMenuReducers from './appMenuReducers'

const testState = Map({ 
  modalType: null,
  modalProps: {}
})

describe('appMenu reducer', () => { 

  it('should handle SHOW_MODAL', () => {
    expect(
      appMenuReducers(undefined, {
        type: SHOW_MODAL,
        modalType: 'MODAL1',
        modalProps: {},
      }).get('modalType')
    ).toEqual('MODAL1'); 
  })

  it('should handle HIDE_MODAL', () => {
    expect(
      appMenuReducers(testState, {
        type: HIDE_MODAL,
      })
    ).toEqual(testState);
  })

  it('should handle noop', () => {
    expect(
      appMenuReducers(testState, {
        type: undefined,
      })
    ).toEqual(testState);
  })

})
