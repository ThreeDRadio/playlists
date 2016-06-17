import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.legend.display =false;
  },

  _prepareDataForChart(data) {
    let toGraph = {
      labels: [],
      datasets: [{
        data: []
      }]
    };

    if (data) {
      data.forEach(item => {
        toGraph.labels.push(item.get('name'));
        toGraph.datasets[0].data.push(item.get('value'));
      });
    }

    return toGraph;
  },

  didRender() {
    let data = this.get('data');

    let toGraph = this._prepareDataForChart(data);

    let options = {
      type: 'bar', 
      data: toGraph, 
      options: {
        scales: {
          yAxes: [
            { 
              ticks: {beginAtZero: true}
            }
          ]
        }
      }
    };
    let ctx = this.$().children(".bar-chart").first();
    this.statsChart = new Chart(ctx, options);
  }
});
