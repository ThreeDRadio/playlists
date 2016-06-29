import { moduleForModel, test } from 'ember-qunit';

moduleForModel('track', 'Unit | Model | track', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('has expected attributes', function(assert) {
  let model = this.subject();

  //XXX Surely there's a way to do this without going to JSON first?
  let attributes = Object.keys(model.toJSON());

  assert.ok(attributes.indexOf('title') > -1, 'title property exists');
  assert.ok(attributes.indexOf('artist') > -1, 'artist property exists');
  assert.ok(attributes.indexOf('duration') > -1, 'duration property exists');
});
