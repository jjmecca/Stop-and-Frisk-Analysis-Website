gsap.registerPlugin(ScrollTrigger);

const info = document.getElementById('info1');
const title = document.getElementById('barchart_title')

let bar = true;

const newTableHTML2 = `
    <h1><strong>Stops by Sex</strong></h1>
    <p>This bar chart shows police stops by sex, revealing a significant disparity. Men are stopped far more often than women, by a factor of over 15, highlighting a strong gender imbalance in stop-and-frisk practices.<br><br></p>
    <hr>
    <div class="legend">
        <br>
        <h3>Legend</h3>
        <ul>
        <li><strong>1</strong> - Male</li>
        <li><strong>2</strong> - Female</li>
        </ul>
    </div>
    <button id="bar_button" type="button" class="btn btn-secondary btn-lg active" style="margin-top: 56.5%; background-color: #141f2a; border-color:rgb(182, 194, 205); color: rgb(182, 194, 205); width: 100%;" onclick="changeBar()">View by Race</button>
    `;
const newTableHTML1 = `
    <h1><strong>Stops by Race</strong></h1>
    <p>This bar chart shows police stops by race, with People of Color (POC) highlighted in red. The data reveals a clear disparity—POC are stopped more often than white individuals, with Black individuals facing the highest stop rate by far.<br><br></p>
    <hr>
    <div class="legend">
        <br>
        <h3>Legend</h3>
        <ul>
        <li><strong>1</strong> - Black</li>
        <li><strong>2</strong> - White Hispanic</li>
        <li><strong>3</strong> - Black Hispanic</li>
        <li><strong>4</strong> - White</li>
        <li><strong>5</strong> - Asian / Pacific Islander</li>
        <li><strong>6</strong> - Middle Eastern/Southwest Asian</li>
        <li><strong>7</strong> - American Indian/Alaskan Native</li>
        </ul>
    </div>
    <button id="bar_button" type="button" class="btn btn-secondary btn-lg active" style="margin-top: 15%; background-color: #141f2a; border-color:rgb(182, 194, 205); color: rgb(182, 194, 205); width: 100%;" onclick="changeBar()">View by Sex</button>
    `;

let data = {
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
let config = {
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
    trigger: "#Section2",
    start: "top 50%",
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

function changeBar(){
    bar=!bar;
    if(!bar){
        data = {
            labels: ['1','2'],
            datasets: [{
                label: 'Stop Counts by Sex', 
                data: [15669,1028],
                backgroundColor: ['rgba(99, 128, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgb(99, 128, 255)','rgb(255, 99, 132)'],
                borderWidth: 1
            }]
        };
        config = {
            type: 'bar',
            data: data,
            options: {
                animation: { duration: 2500 },
                responsive: true,
                scales: { y: { beginAtZero: true } },
                maintainAspectRatio: false
            },
        };
    }else{
        data = {
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
        config = {
            type: 'bar',
            data: data,
            options: {
                animation: { duration: 2500 },
                responsive: true,
                scales: { y: { beginAtZero: true } },
                maintainAspectRatio: false
            },
        };
    }
    chartInstance.destroy();
    chartInstance = new Chart(ctx, config);

    const newHTML = bar ? newTableHTML1 : newTableHTML2;

    gsap.to(info, {
        opacity: 0,
        duration: 0.8,
        x: 20,
        onComplete: () => {
            info.innerHTML = newHTML;

            gsap.fromTo(info,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 1 }
            );
        }
    });

    gsap.to(title, {
        opacity: 0,
        duration: 0.8,
        overwrite: true,
        onComplete: () => {
          const newTableHTML1 = `Stop Counts by Race Description`;
          const newTableHTML2 = `Stop Counts by Sex`;

          title.innerHTML = bar ? newTableHTML1 : newTableHTML2;

          gsap.fromTo(title,
            { opacity: 0 },
            { opacity: 1, duration: 1, overwrite: true }
          );
        }
    });
}