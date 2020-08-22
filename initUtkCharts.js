// manually updated from https://veoci.com/veoci/p/form/4jmds5x4jj4j#tab=entryForm
// eventually should be automatic!!
const utkCovidCases = {
  "students": 16,
  "faculty": 3,
  "staff": 5,
  "cumulativeSinceJune8": 107,
  "updated": "8/6/20 11:31"
}

// using new chart from https://www.utk.edu/coronavirus/guides/data-monitoring-and-contingency-options/
const activeUtkCases = [
  ["08/01", 12, 14, 26],
  ["08/02", 12, 15, 27],
  ["08/03", 10, 17, 27],
  ["08/04", 10, 16, 26],
  ["08/05", 11, 16, 27],
  ["08/06", 8, 14, 22],
  ["08/07", 8, 14, 22],
  ["08/08", 8, 17, 25],
  ["08/09", 8, 16, 24],
  ["08/10", 8, 16, 24],
  ["08/11", 8, 18, 26],
  ["08/12", 8, 20, 28],
  ["08/13", 7, 29, 36],
  ["08/14", 7, 44, 51],
  ["08/15", 8, 56, 64],
  ["08/16", 9, 60, 69],
  ["08/17", 9, 66, 75],
  ["08/18", 8, 89, 97],
  ["08/19", 8, 97, 105]
]

let ctx = document.getElementById('current-utk-cases-chart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: activeUtkCases.map(c => c[0]),
    datasets: [
      {
        label: 'Employees',
        data: activeUtkCases.map(c => c[1]),
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1
      },
      {
        label: 'Students',
        data: activeUtkCases.map(c => c[2]),
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Total',
        data: activeUtkCases.map(c => c[1] + c[2]),
        backgroundColor: 'orange',
        borderColor: 'grey',
        borderWidth: 1
      },
    ]
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
