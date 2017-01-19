import reducer, { initialState } from './router-reducer';

import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

describe('router-reducer', () => { 

  it('should handle LOCATION_CHANGE', () => {
    expect(
      reducer(undefined, {
        type: LOCATION_CHANGE,
        payload: '/123',
      }).get('locationBeforeTransitions')
    ).toEqual('/123'); 
  })

  it('should handle noop', () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState); 
  })

})
