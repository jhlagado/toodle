import makeActionCreator from './makeActionCreator';

const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
const actionCreator = makeActionCreator(EXAMPLE_ACTION, 'arg1');

describe('makeActionCreator', () => { 

  it('should not have any undefined symbols', () => {
    expect(
      typeof actionCreator
    ).toBe('function'); 
  })

  it('should not have any undefined symbols', () => {
    const action = actionCreator();
    expect(
      action.type 
    ).toBe(EXAMPLE_ACTION); 
  })

  it('should not have any undefined symbols', () => {
    const action = actionCreator(100);
    expect(
      action.arg1 
    ).toBe(100); 
  })

})
