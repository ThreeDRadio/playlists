import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.legend.display =false
    },


    didRender() {
        let data = this.get('data');

        let toGraph = {
            labels: [],
            datasets: [{
                data: []
            }]
        }

        data.forEach(item => {
            toGraph.labels.push(item.get('name'));
            toGraph.datasets[0].data.push(item.get('value'));
        });

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
        }
        console.log(this.elementId);
        let ctx = this.$().children(".bar-chart").first();//.getContext('2d');
        let statsChart = new Chart(ctx, options);
    }
});
