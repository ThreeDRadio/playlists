import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('show', 'Unit | Model | show', {
  // Specify the other units that are required for this test.
  needs: ['model:playlist','model:TopArtist','model:statistic']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('has playlists', function(assert) {
  let Show = this.store().modelFor('show');
  let relationship = Ember.get(Show, 'relationshipsByName').get('playlists');

  assert.equal(relationship.key, 'playlists');
  assert.equal(relationship.kind, 'hasMany');
  assert.equal(relationship.type, 'playlist');
});

test('has top artists', function(assert) {
  let Show = this.store().modelFor('show');
  let relationship = Ember.get(Show, 'relationshipsByName').get('topartists');

  assert.equal(relationship.key, 'topartists');
  assert.equal(relationship.kind, 'hasMany');
  assert.equal(relationship.type, 'top-artist');
});

test('has statistics', function(assert) {
  let Show = this.store().modelFor('show');
  let relationship = Ember.get(Show, 'relationshipsByName').get('statistics');

  assert.equal(relationship.key, 'statistics');
  assert.equal(relationship.kind, 'hasMany');
  assert.equal(relationship.type, 'statistic');
});
