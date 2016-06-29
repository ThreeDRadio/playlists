import { moduleForModel, test } from 'ember-qunit';

moduleForModel('release', 'Unit | Model | release', {
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

  assert.ok(attributes.indexOf('artist') > -1, 'artist property exists');
  assert.ok(attributes.indexOf('title') > -1, 'title property exists');
  assert.ok(attributes.indexOf('year') > -1, 'year property exists');
  assert.ok(attributes.indexOf('genre') > -1, 'genre property exists');
  assert.ok(attributes.indexOf('company') > -1, 'company property exists');
  assert.ok(attributes.indexOf('country') > -1, 'country property exists');
  assert.ok(attributes.indexOf('arrivaldate') > -1, 'arrivalDate property exists');
  assert.ok(attributes.indexOf('compilation') > -1, 'compilation property exists');
  assert.ok(attributes.indexOf('demo') > -1, 'demo property exists');
  assert.ok(attributes.indexOf('local') > -1, 'local property exists');
  assert.ok(attributes.indexOf('female') > -1, 'female property exists');
  assert.ok(attributes.indexOf('owner') > -1, 'owner property exists');
  assert.ok(attributes.indexOf('timestamp') > -1, 'timestamp property exists');

});
