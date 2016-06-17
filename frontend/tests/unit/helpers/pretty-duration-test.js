import { prettyDuration } from 'frontend/helpers/pretty-duration';
import { module, test } from 'qunit';

module('Unit | Helper | pretty duration');

test('Removes zero hour part', function(assert) {
  let result = prettyDuration(["00:12:53"]);
  assert.equal(result, "12:53");

  result = prettyDuration(["01:12:53"]);
  assert.equal(result, "1:12:53");
});

test('Removes zero leading minute', function(assert) {
  let result = prettyDuration(["00:02:53"]);
  assert.equal(result, "2:53");
});

test('Displays single leading zero minute', function(assert) {
  let result = prettyDuration(["00:00:53"]);
  assert.equal(result, "0:53");
});

test("Doesn't mess with what it doesn't understand", function(assert) {
  let result = prettyDuration(["Not a time at all"]);
  assert.equal(result, "Not a time at all");

  result = prettyDuration(["00: Just Kidding!"]);
  assert.equal(result, "00: Just Kidding!");
});
