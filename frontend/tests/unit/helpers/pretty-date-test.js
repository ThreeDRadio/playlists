import { prettyDate } from 'frontend/helpers/pretty-date';
import { module, test } from 'qunit';

module('Unit | Helper | pretty date');

// Replace this with your real tests.
test('Makes valid dates pretty', function(assert) {
  // fucking timezones
  let date = new Date();
  date.setDate(18);
  date.setFullYear(2016);
  date.setMonth(6);
  let result = prettyDate(date);
  assert.equal(result, "June 18, 2016");
});

