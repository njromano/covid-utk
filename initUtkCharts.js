// manually updated from https://veoci.com/veoci/p/form/4jmds5x4jj4j#tab=entryForm
// eventually should be automatic!!
const utkCovidCases ={
  "students": 14,
  "faculty":3,
  "staff": 9,
  "cumulativeSinceJune8": 100,
  "updated": "8/1/20 11:04"
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
