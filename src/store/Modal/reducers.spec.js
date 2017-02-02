import reducers from './reducers'
import { showModal, hideModal } from './actions'

describe('modal reducer', () => {


  it('should handle initial state', () => {
    const noAction = {};
    expect(reducers(undefined, noAction)).toEqual([])
  })

  it('should handle showModal() and hideModal()', () => {

    const action1 = showModal('DELETE_POST', { postId: 42 });
    const action2 = showModal('CONFIRM_DELETE_POST');
    const action3 = hideModal();

    const item1 = {
      modalType: 'DELETE_POST',
      modalProps: {
        postId: 42,
      },
    };

    const item2 = {
      modalType: 'CONFIRM_DELETE_POST',
      modalProps: undefined,
    };

    expect(reducers([], action1)).toEqual([item1]);
    expect(reducers([item1], action2)).toEqual([item1, item2]);
    expect(reducers([item1, item2], action3)).toEqual([item1]);
    expect(reducers([item1], action3)).toEqual([]);
  })

})
