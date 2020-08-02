let data = [];
let dates = [];
let deaths = [];
let deathsIncrease = [];
let hospitalizedCurrently = [];
let positiveCases = [];
let positiveIncrease = [];
fetch('https://covidtracking.com/api/v1/states/tn/daily.json')
  .then(r => r.json().then(json => data = json.reverse()))
  //.then(() => console.log(data))
  .then(() => {
    dates = data.map(d => d.date);
    deaths = data.map(d => d.death);
    deathsIncrease = data.map(d => d.deathIncrease);
    hospitalizedCurrently = data.map(d => d.hospitalizedCurrently);
    positiveCases = data.map(d => d.positive);
    positiveIncrease = data.map(d => d.positiveIncrease);
  })
  .then(() => {
    initChart({
      id: 'new-cases-chart',
      dates,
      data: positiveIncrease,
      label: 'Daily new cases in TN',
      color: 'orange'
    });
    initChart({
      id: 'new-deaths-chart',
      dates,
      data: deathsIncrease,
      label: 'Daily new deaths in TN',
      color: 'red'
    });
    initChart({
      id: 'hospitalized-chart',
      dates,
      data: hospitalizedCurrently,
      label: 'Daily hospitalization in TN',
      color: 'blue'
    });

  })

function initChart({id, dates, data, label, color}) {
  let ctx = document.getElementById(id).getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1
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
}

const url = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv";
let csv = '';
let knoxRows = [];
fetch(url)
  .then(r => r.text().then(text => csv = text))
  .then(() => {
    let rows = csv.split('\n').filter(row => row.includes('Knox,Tennessee'));
    rows = rows.map(row => {
      const parts = row.split(',');
      //console.log(parts);
      return {
        date: parts[0],
        cases: parts[4],
        deaths: parts[5]
      };
    })
    knoxRows = rows;
  })
  .then(() => {
    const dates = knoxRows.map(row => row.date);
    const cases = knoxRows.map(row => row.cases);
    // calculate new cases
    const newCases = [0];
    for (let i = 1; i < cases.length; i++) {
      const newCaseCount = cases[i] - cases[i-1];
      newCases.push(newCaseCount);
    }
    // calculate new deaths
    const newDeaths = [0];
    const deaths = knoxRows.map(row => row.deaths);
    for (let i = 1; i < deaths.length; i++) {
      const newDeathCount = deaths[i] - deaths[i-1];
      newDeaths.push(newDeathCount);
    }
    let lastIndex = cases.length - 1;
    document.getElementById('knox-cases-cumulative').textContent = cases[cases.length - 1];
    document.getElementById('knox-deaths-cumulative').textContent = deaths[deaths.length - 1];
    initChart({
      id: 'knox-cases-chart',
      dates,
      data: newCases,
      label: 'New cases in Knox County',
      color: 'orange'
    });
    initChart({
      id: 'knox-deaths-chart',
      dates,
      data: newDeaths,
      label: 'New deaths in Knox County',
      color: 'red'
    });
  });
