// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Visitors',
      data: [120, 190, 300, 500, 200],
      backgroundColor: 'rgba(54, 162, 235, 0.7)'
    }]
  }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Chrome', 'Firefox', 'Safari'],
    datasets: [{
      data: [55, 25, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 206, 86, 0.7)'
      ]
    }]
  }
});
