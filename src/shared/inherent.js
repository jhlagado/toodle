function State(setup/* optional */) { 'use strict';
    Object.freeze(Object.assign(this, setup));
}
State.prototype = Object.create(null);
State.next = function next(state, setup/* optional */) {
    return Object.setPrototypeOf(new State(setup), state);
};
State.prev = function prev(state) {
    var previous = Object.getPrototypeOf(state);
    return previous === State.prototype ? null : previous;
};
State.keys = function keys(state) {
  var keys = [], k;
  for (k in state) keys.push(k);
  return keys;
};
function diff(prev, curr) {
  const keys = [];
  while (curr !== prev) {
    keys.push.apply(keys, Object.keys(curr));
    curr = Object.getPrototypeOf(curr);
  }
  return new Set(keys).values();
}
// returns the proto chain length
State.size = function history(state) {
  var i = 0;
  do {
    state = Object.getPrototypeOf(state);
  } while (state !== State.prototype && ++i);
  return i;
};

// flats out a chain
State.merge = function merge(state) {
  return new State(
    State.keys(state).reduce(
      (o, key) {
        o[key] = state[key];
        return o;
      },
      {}
    )
  );
};

// from time to time ..
if (State.size(state) > 512) {
  // reset history
  state = State.merge(state);
}