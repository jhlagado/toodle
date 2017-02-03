import {SET_VISIBILITY_FILTER} from '../store/Todo/actions'
import {mapDispatchToProps} from './FilterLink'

describe('filterlink', () => {

  it('should dispatch on click', () => {
    let received;
    const dispatch = (action) => {
      received = action;
    }
    var map = mapDispatchToProps(dispatch, {filter: 'filter1'});
    map.onClick();
    console.log('received ---->', received);
    expect(received.type).toBe(SET_VISIBILITY_FILTER);
    expect(received.payload).toBe('filter1');
  })

})
