let polarChart,ctx;

const dataset1 = {
  label: 'Weapon Found',
  data: [14338, 2633],
  backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(75, 192, 192)',
    'rgb(255, 205, 86)',
    'rgb(201, 203, 207)',
    'rgb(54, 162, 235)'
  ]
};

const dataset2 = {
  label: 'Suspect Arrested',
  data: [12071, 4900],
  backgroundColor: [
    'rgb(255, 159, 64)',
    'rgb(153, 102, 255)',
    'rgb(255, 205, 86)',
    'rgb(201, 203, 207)',
    'rgb(75, 192, 192)'
  ]
};

const dataset3 = {
    label: 'Frisked',
    data: [10924, 6047],
    backgroundColor: [
      'rgb(255, 159, 64)',
      'rgb(153, 102, 255)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(75, 192, 192)'
    ]
  };

const data = {
  labels: ['No', 'Yes'],
  datasets: [dataset1]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    animation: {
      animateRotate: true
    }
  }
};

document.addEventListener("DOMContentLoaded",() => {
    ctx = document.getElementById("pieChart").getContext('2d');
    pie = new Chart(ctx, config);
})

function reloadPie(){
    pie.destroy();
    pie = new Chart(ctx, config);
}