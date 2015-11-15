var ctx = document.getElementById("showStats").getContext("2d");
var statsChart = new Chart(ctx).HorizontalBar(statsData, {});
