import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bar-graph', 'Integration | Component | bar graph', {
  integration: true
});

test('Renders empty if provided no arguments', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bar-graph}}`);

  assert.equal(this.$('.bar-chart').length, 1);

});

test('Renders a graph', function(assert) {
  let obj1 = Ember.Object.create({ name: "stat1", value: 4});
  let obj2 = Ember.Object.create({ name: "stat2", value: 8});
  this.set('data', [obj1, obj2]);

  //TODO Is this enough? Do we need to test that ChartJS actually worked?
  this.render(hbs`{{bar-graph data=data}}`);
  assert.equal(this.$('.bar-chart').length, 1);
});
