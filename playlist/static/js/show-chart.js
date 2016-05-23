Chart.defaults.global.responsive = true;
Chart.defaults.global.legend.display =false
var ctx = document.getElementById("showStats").getContext("2d");
var statsChart = new Chart(ctx, {type: 'bar', data: statsData, label: '', scaleStartValue: 0});
