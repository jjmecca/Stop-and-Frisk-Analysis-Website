gsap.registerPlugin(ScrollTrigger);

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
        animation: { duration: 2500 },
        responsive: true,
        scales: { y: { beginAtZero: true } }
    },
};


function reloadGraph(){
    chartInstance.destroy()
    chartInstance = new Chart(ctx, config)
}

let ctx = document.getElementById("barchart").getContext('2d');
let chartInstance = null;

function renderChart() {
    if (!ctx) return;
    chartInstance = new Chart(ctx, config);
}

ScrollTrigger.create({
    trigger: "#Section1",
    start: "+=400",
    end: "bottom bottom",
    markers: true,
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