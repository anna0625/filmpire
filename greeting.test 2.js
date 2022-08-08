// greeting.test.js
const greeting = (guest) => `Hello, ${guest}!`;

// eslint-disable-next-line no-undef
describe('greeting()', () => { // 1
  // eslint-disable-next-line no-undef
  it('says hello', () => { // 2
    // eslint-disable-next-line no-undef
    expect(greeting('Jest')).toBe('Hello, Jest!'); // 3
  });
});
