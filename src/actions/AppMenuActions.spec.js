import findKey from 'lodash/findKey';

import * as actions from './appMenuActions';
import {SHOW_MODAL, HIDE_MODAL} from './appMenuActions';

describe('appMenu actions check', () => { 

  it('actions should not have any undefined symbols', () => {
    expect(
      findKey(actions, (value) => value === undefined)
    ).not.toBeDefined(); 
  })

})
