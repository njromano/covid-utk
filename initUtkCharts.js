const utkCovidCases ={
  "students": 14,
  "faculty":3,
  "staff": 8,
  "cumulativeSinceJune8": 99,
  "updated": "7/31/20 16:39"
}

document.getElementById('utk-stats-updated').textContent = utkCovidCases.updated;
document.getElementById('utk-cumulative-since').textContent = utkCovidCases.cumulativeSinceJune8;
let ctx = document.getElementById('current-utk-cases-chart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Students', 'Faculty', 'Staff'],
    datasets: [{
      label: 'Active cases',
      data: [utkCovidCases.students, utkCovidCases.faculty, utkCovidCases.staff],
      backgroundColor: ['orange', 'blue', 'gray'],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
