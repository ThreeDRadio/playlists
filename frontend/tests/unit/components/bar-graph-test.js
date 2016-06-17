import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bar-graph', 'Unit | Component | bar graph', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('_prepareDataForChart', function(assert) {
  
  let component = this.subject();

  let obj1 = Ember.Object.create({ name: "stat1", value: 4});
  let obj2 = Ember.Object.create({ name: "stat2", value: 8});
  let obj3 = Ember.Object.create({ name: "stat4", value: 98});

  let data=[obj1, obj2, obj3];

  let prepared = component._prepareDataForChart(data);

  let expected = {
    labels: ["stat1", "stat2", "stat4"],
    datasets: [{
      data: [4,8, 98]
    }]
  };

  assert.deepEqual(prepared, expected);
});
