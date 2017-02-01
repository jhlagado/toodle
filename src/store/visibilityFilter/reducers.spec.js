import {SET_VISIBILITY_FILTER} from './constants'
import visibilityFilter from './visibilityFilter'

// jest.resetModules();

describe('visibilityFilter reducer', () => {

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter(undefined, {
        type: SET_VISIBILITY_FILTER,
        filter: 'SHOW_ACTIVE'
      })
    ).toEqual('SHOW_ACTIVE');
  })

  it('should handle noop', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: undefined,
      })
    ).toEqual('SHOW_ALL');
  })

})
