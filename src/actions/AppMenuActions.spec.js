import findKey from 'lodash/findKey';

import * as appMenuActions from './AppMenuActions';
import { SHOW_MODAL, HIDE_MODAL} from '../actions/AppMenuActions';

describe('appMenu actions check', () => { 

  it('appMenuActions should not have any undefined symbols', () => {
    // console.log('appMenuActions', appMenuActions);
    expect(
      findKey(appMenuActions, (value) => value === undefined)
    ).not.toBeDefined(); 
  })

})
