import {SET_VISIBILITY_FILTER} from '../store/Todo/constants'
import {mapDispatchToProps} from './FilterLink'

describe('filterlink', () => {

  it('should dispatch on click', () => {
    let received;
    const dispatch = (action) => {
      received = action;
    }
    var map = mapDispatchToProps(dispatch, {filter: 'filter1'});
    map.onClick();
    expect(received.type).toBe(SET_VISIBILITY_FILTER);
    expect(received.filter).toBe('filter1');
  })

})
