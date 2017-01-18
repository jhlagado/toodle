import x from './x'

// console.log('WHERE??????????',x);

describe('Addition', () => {
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
  // it('knows that 3 and 3 make 6', () => {
  //   expect(3 + 3).toBe(6);
  // });
  it('is defined', () => {
    expect(x).toBeDefined();
  });
  it('is a function', () => {
    expect(typeof x).toBe('function');
  });
  it('to return 123', () => {
    expect(x()).toBe(123); 
  });
});
