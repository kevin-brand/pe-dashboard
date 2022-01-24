const themeToggle = document.querySelector(".theme-toggler");

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
});

google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('date', 'Month');
data.addColumn('number', 'Fuel Usage');
data.addColumn('number', 'Distance Traveled');

data.addRows([
  [new Date(2021, 0),  37.8, 80.8],
  [new Date(2021, 1),  30.9, 69.5],
  [new Date(2021, 2),  25.4,   57],
  [new Date(2021, 3),  11.7, 18.8],
  [new Date(2021, 4),  11.9, 17.6],
  [new Date(2021, 5),   8.8, 13.6],
  [new Date(2021, 6),   7.6, 12.3],
  [new Date(2021, 7),  12.3, 29.2],
  [new Date(2021, 8),  16.9, 42.9],
  [new Date(2021, 9), 12.8, 30.9],
  [new Date(2021, 10),  5.3,  7.9],
  [new Date(2021, 11),  6.6,  8.4],
]);

var options = {
  backgroundColor: { fill:'transparent' },
  chartArea: { backgroundColor: 'transparent' },
  areaOpacity: 0,
  height: 300
};

var chart = new google.charts.Line(document.getElementById('curve-chart'));

chart.draw(data, google.charts.Line.convertOptions(options));
}