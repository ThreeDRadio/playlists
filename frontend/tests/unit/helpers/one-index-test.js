import { oneIndex } from 'frontend/helpers/one-index';
import { module, test } from 'qunit';

module('Unit | Helper | one index');

// Replace this with your real tests.
test('one-index works with valid integers', function(assert) {
  let result = oneIndex([42]);
  assert.strictEqual(result, 43);

  result = oneIndex([-3]);
  assert.strictEqual(result, -2);

  result = oneIndex([0]);
  assert.strictEqual(result, 1);
});

test('one-index ignores what it does not understand', function(assert) {

  let result = oneIndex(["here is a string"]);
  assert.strictEqual(result, "here is a string");

  result = oneIndex([null]);
  assert.strictEqual(result, null);

  result = oneIndex([""]);
  assert.strictEqual(result, "");
});
