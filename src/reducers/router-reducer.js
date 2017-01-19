/**
 * A custom router reducer to support an Immutable store.
 * See: https://github.com/gajus/redux-immutable#using-with-react-router-redux
 */
import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

export const initialState = Map({
    locationBeforeTransitions: null
});

// export const initialStatex = initialState;

export default (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        });
    }

    return state;
};