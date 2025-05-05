gsap.registerPlugin(ScrollTrigger);

let monthData = {
    labels: ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
    datasets: [{
        label: 'Stop Counts by Month', 
        data: [1468, 1304, 1407, 1544, 1647, 1254, 1439, 1368,1170,1734,1283,1353],
        fill: false,
        borderColor: ['rgb(255, 99, 132)'],
        tension: 0.1,
    }]
};
let lineConfig = {
    type: 'line',
    data: monthData,
    options: {
        animation: { duration: 2000 },
        responsive: true,
        scales: { y: { beginAtZero: true } },
    },
};

let lineCtx = document.getElementById("linechart").getContext('2d');
let lineChart = null;

function reloadLine(){
    lineChart.destroy()
    lineChart = new Chart(lineCtx, lineConfig)
}

function renderLine() {
    if (!ctx) return;
    lineChart = new Chart(lineCtx, lineConfig);
}

ScrollTrigger.create({
    trigger: "#Section1",
    start: "top 50%",
    scrub: true,
    onEnter: () => { if (!lineChart) renderLine(); },
    onLeaveBack: () => {
        if (lineChart) {
            lineChart.destroy();
            lineChart = null;
        }
    }
});

new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 70
});