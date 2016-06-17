import { moduleForModel, test } from 'ember-qunit';

moduleForModel('playlistentry', 'Unit | Model | playlistentry', {
  // Specify the other units that are required for this test.
  needs: ['model:playlist']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
test('Default duration', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.equal(model.get('duration'), "0:00");
});
