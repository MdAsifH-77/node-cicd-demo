const test = require('node:test');
const assert = require('node:assert');

test('sanity: math still works', () => {
  assert.strictEqual(1 + 1, 2);
});
