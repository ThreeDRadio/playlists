import { moduleForModel, test } from 'ember-qunit';

moduleForModel('top-artist', 'Unit | Model | top artist', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject({artist: "Some Band", plays: 5});
  // let store = this.store();
  assert.ok(!!model);
  assert.equal(model.get('artist'), "Some Band");
  assert.equal(model.get('plays'), 5);
});
