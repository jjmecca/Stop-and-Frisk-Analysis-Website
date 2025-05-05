let pie,pieCtx;

const dataset2 = {
  label: 'Weapon Found',
  data: [14338, 2633],
  backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(75, 100, 170)'
  ]
};

const dataset3 = {
  label: 'Suspect Arrested',
  data: [12071, 4900],
  backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(75, 100, 170)'
  ]
};

const dataset1 = {
    label: 'Frisked',
    data: [10924, 6047],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 100, 170)'
    ]
  };

const pieData1 = {
  labels: ['No', 'Yes'],
  datasets: [dataset1]
};

const pieData2 = {
  labels: ['No', 'Yes'],
  datasets: [dataset2]
};

const pieData3 = {
  labels: ['No', 'Yes'],
  datasets: [dataset3]
};

const pieConfig1 = {
  type: 'pie',
  data: pieData1,
  options: {
    responsive: true,
    animation: {
      animateRotate: true
    }
  }
};

const pieConfig2 = {
  type: 'pie',
  data: pieData2,
  options: {
    responsive: true,
    animation: {
      animateRotate: true
    }
  }
};

const pieConfig3 = {
  type: 'pie',
  data: pieData3,
  options: {
    responsive: true,
    animation: {
      animateRotate: true
    }
  }
};

let pieConfig=pieConfig1;

function renderPie(){
  pieCtx = document.getElementById("pieChart").getContext('2d');
  pie = new Chart(pieCtx, pieConfig);
}

function frisked(){
  pieConfig=pieConfig1;
  pie.destroy();
  pie = new Chart(pieCtx, pieConfig);
}

function weapon(){
  pieConfig=pieConfig2;
  pie.destroy();
  pie = new Chart(pieCtx, pieConfig);
}

function arrested(){
  pieConfig=pieConfig3;
  pie.destroy();
  pie = new Chart(pieCtx, pieConfig);
}

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#Section5",
    start: "top 50%",
    scrub: true,
    onEnter: () => { if (!pie) renderPie(); },
    onLeaveBack: () => {
        if (pie) {
            pie.destroy();
            pie = null;
        }
    }
});

new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 70
});