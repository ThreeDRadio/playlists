import { moduleForModel, test } from 'ember-qunit';

moduleForModel('statistic', 'Unit | Model | statistic', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject({name: "Stat", value: 5});
  // let store = this.store();
  assert.ok(!!model);
  assert.equal(model.get('name'), "Stat");
  assert.equal(model.get('value'), 5);
});
