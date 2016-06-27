import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

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

test('Quotas false by default', function(assert) {
  let model = this.subject();
  assert.equal(model.get('local'), false);
  assert.equal(model.get('australian'), false);
  assert.equal(model.get('female'), false);
  assert.equal(model.get('newRelease'), false);
});

test('Has a parent', function(assert) {
  let PlaylistEntry = this.store().modelFor('playlistentry');
  let relationship = Ember.get(PlaylistEntry, 'relationshipsByName').get('playlist');

  assert.equal(relationship.key, 'playlist');
  assert.equal(relationship.kind, 'belongsTo');
});
