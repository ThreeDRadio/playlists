Chart.defaults.global.responsive = true;
var ctx = document.getElementById("showStats").getContext("2d");
var statsChart = new Chart(ctx).Bar(statsData, {});
