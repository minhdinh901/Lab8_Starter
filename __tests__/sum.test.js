// sum.test.js

const script = require("../scripts/sum.js");

test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(script.sum(1,2)).toBe(3);
});
