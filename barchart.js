gsap.registerPlugin(ScrollTrigger);

const data = {
    labels: ['1','2','3','4','5','6','7'],
    datasets: [{
        label: 'Stop Counts by Race', 
        data: [8542, 3001, 1447, 854, 265, 130, 18],
        backgroundColor: ['rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)','rgba(255, 99, 132, 0.2)',
            'rgba(78, 78, 78, 0.2)','rgba(255, 99, 132, 0.2)', 
            'rgba(255, 99, 132, 0.2)' , 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(112, 94, 98)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)'],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        animation: { duration: 2500 },
        responsive: true,
        scales: { y: { beginAtZero: true } },
        maintainAspectRatio: false
    },
};

let ctx = document.getElementById("barchart").getContext('2d');
let chartInstance = null;

function reloadGraph(){
    chartInstance.destroy()
    chartInstance = new Chart(ctx, config)
}

function renderChart() {
    if (!ctx) return;
    chartInstance = new Chart(ctx, config);
}

ScrollTrigger.create({
    trigger: "#Section1",
    start: "+=400",
    scrub: true,
    onEnter: () => { if (!chartInstance) renderChart(); },
    onLeaveBack: () => {
        if (chartInstance) {
            chartInstance.destroy();
            chartInstance = null;
        }
    }
});

new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 70
});