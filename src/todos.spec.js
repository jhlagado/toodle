import Immutable from 'immutable';
import { todo, todos }from './todos'

// jest.resetModules();

describe('todo reducer', () => {

  var state = Immutable.fromJS({
    text: 'Run the tests',
    completed: false,
    id: 1
  })

  it('should handle TOGGLE_TODO', () => {
    var after = Immutable.fromJS({
      text: 'Run the tests',
      completed: true,
      id: 1
    })
    expect(
      todo(state, {
        type: 'TOGGLE_TODO',
        id: 1
      }).get('completed')
    ).toEqual(!after.get('completed'));
  })

  it('should handle noop', () => {
    expect(
      todo(state, { 
        type: 'NOOP',
        id: 1
      })
    ).toBe(state);
  })

});

describe('todos reducer', () => {
  it('should handle initial state', () => {
    const a = todos(undefined, {});;
    const b = Immutable.fromJS([]);
    expect(Immutable.is(a, b)).toBe(true)
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        text: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ], {
        type: 'ADD_TODO',
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})
