// manually updated from https://veoci.com/veoci/p/form/4jmds5x4jj4j#tab=entryForm
// eventually should be automatic!!
const utkCovidCases ={
  "students": 18,
  "faculty":4,
  "staff": 4,
  "cumulativeSinceJune8ThroughAugust8": 113,
  "cumulativeSinceAugust9": 4,
  "updated": "8/11/20 08:28"
}

// latest cited news https://www.knoxnews.com/story/news/education/2020/08/13/university-tennessee-knoxville-active-covid-19-cases/5555098002/
// 8/13/2020
const latestCitedCases = {
  "studentsLivingOnCampus": 13,
  "studentsLivingOffCampus": 69,
  "employees": 73
}

document.getElementById('utk-stats-updated').textContent = "8/13/2020";
document.getElementById('utk-cumulative-since').textContent = latestCitedCases.studentsLivingOnCampus + latestCitedCases.studentsLivingOffCampus + latestCisedCases.employees;
let ctx = document.getElementById('current-utk-cases-chart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Students (On-Campus)', 'Students (Off-Campus)', 'Employees'],
    datasets: [{
      label: 'Active cases',
      data: [latestCitedCases.studentsLivingOnCampus, latestCitedCases.studentsLivingOffCampus, latestCitedCasts.employees],
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
