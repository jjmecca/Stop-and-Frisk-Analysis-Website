const data = {
    labels: ['1','2','3','4','5','6','7'],
    datasets: [{
        label: 'Stop Counts by Race', 
        data: [18, 265, 8542, 1447, 130, 854, 3001],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    },
};
document.addEventListener("DOMContentLoaded",() => {
    ctx = document.getElementById("barchart").getContext('2d');
    barChart = new Chart(ctx, config)
})

function reloadGraph(){
    barChart.destroy()
    barChart = new Chart(ctx, config)
}