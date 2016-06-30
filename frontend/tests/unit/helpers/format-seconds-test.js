import { formatSeconds } from 'frontend/helpers/format-seconds';
import { module, test } from 'qunit';

module('Unit | Helper | format seconds');

// Replace this with your real tests.
test('it works with valid data', function(assert) {
  let result = formatSeconds([42]);
  assert.equal("0:42", result);
  
  result = formatSeconds([0]);
  assert.equal("0:00", result);

  result = formatSeconds([9]);
  assert.equal("0:09", result);

  result = formatSeconds([54]);
  assert.equal("0:54", result);

  result = formatSeconds([60]);
  assert.equal("1:00", result);

  result = formatSeconds([68]);
  assert.equal("1:08", result);

  result = formatSeconds([120]);
  assert.equal("2:00", result);

  result = formatSeconds([154]);
  assert.equal("2:34", result);
});
