import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('playlist', 'Unit | Model | playlist', {
  // Specify the other units that are required for this test.
  needs: ['model:playlistentry', 'model:show']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('Incomplete by default', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.equal(model.get('complete'), false);
});

test('has tracks', function(assert) {
  let Playlist= this.store().modelFor('playlist');
  let relationship = Ember.get(Playlist, 'relationshipsByName').get('tracks');

  assert.equal(relationship.key, 'tracks');
  assert.equal(relationship.kind, 'hasMany');
  assert.equal(relationship.type, 'playlistentry');
});

test('has parent ', function(assert) {
  let Playlist= this.store().modelFor('playlist');
  let relationship = Ember.get(Playlist, 'relationshipsByName').get('show');

  assert.equal(relationship.key, 'show');
  assert.equal(relationship.kind, 'belongsTo');
  assert.equal(relationship.type, 'show');
});
