import {clickFilterLink} from './FilterLink'

let received;
const dispatch = (action) => {
  received = action;
}

describe('filterlink', () => {

  it('should dispatch on click', () => {
    clickFilterLink(dispatch, 'filter1');
    expect(received.type).toBe('SET_VISIBILITY_FILTER');
    expect(received.filter).toBe('filter1');
  })

})
