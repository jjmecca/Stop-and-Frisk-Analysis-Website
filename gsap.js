
const Mrows = document.querySelectorAll("#racism_ranked tr");
gsap.from(Mrows, {
    y: 100, // Fly in below
    opacity: 0, 
    duration: 1, 
    stagger: 0.3,
    scrollTrigger: {
    trigger: "#racism_ranked", 
    start: "top 80%", // Start
    toggleActions: "restart none none none",
    },
});

//initial
gsap.set("#info", { opacity: 0, x: 20 });

ScrollTrigger.batch("#info", {
start: "top 50%",
end: "bottom",
onEnter: batch => {
    gsap.to(batch, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    stagger: 0.1,
    overwrite: true
    });
},
onEnterBack: batch => {
    gsap.to(batch, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    stagger: 0.1,
    overwrite: true
    });
},
onLeaveBack: batch => {
    gsap.to(batch, {
    opacity: 0,
    x: 20,
    duration: 1.5,
    stagger: 0.1,
    overwrite: true
    });
}
});

let showingTable1 = false;

function replaceTable() {
const container = document.getElementById('racism_ranked');

gsap.to(container, {
    opacity: 0,
    y: 100,
    duration: 0.8,
    overwrite: true,
    onComplete: () => {
    const newTableHTML1 = `
        <table>
        <tr><th>Borough</th><th>POC Population %</th><th>POC Stop %</th></tr>
        <tr><td>Staten Island</td><td>44.6%</td><td>79.21%</td></tr>
        <tr><td>Manhattan</td><td>68.7%</td><td>93.14%</td></tr>
        <tr><td>Queens</td><td>76%</td><td>90.88%</td></tr>
        <tr><td>Brooklyn</td><td>62.8%</td><td>92.73%</td></tr>
        <tr><td>The Bronx</td><td>91%</td><td>98.47%</td></tr>
        </table>
    `;

    const newTableHTML2 = `
        <table>
        <tr><th>Rank</th><th>Borough</th><th>Ratio</th></tr>
        <tr><td>1</td><td>Staten Island</td><td>1.78</td></tr>
        <tr><td>2</td><td>Brooklyn</td><td>1.48</td></tr>
        <tr><td>3</td><td>Manhattan</td><td>1.36</td></tr>
        <tr><td>4</td><td>Queens</td><td>1.20</td></tr>
        <tr><td>5</td><td>Bronx</td><td>1.08</td></tr>
        </table>
    `;

    container.innerHTML = showingTable1 ? newTableHTML2 : newTableHTML1;
    showingTable1 = !showingTable1;

    gsap.fromTo(container,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, overwrite: true }
    );
    }
});
}

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#navbar'
});

const imgElement = document.getElementById('map1');
const container = document.getElementById('mapTitle');
const desc = document.getElementById('mapDesc');

gsap.from([imgElement,container], {
    x: -60,
    opacity: 0, 
    duration: 2, 
    scrollTrigger: {
    trigger: "#map1", 
    start: "top 80%", // Start
    end: "bottom 50%",
    toggleActions: "restart none none none",
    },
});
let sexMap = false;

function replaceMap() {
const map_button = document.getElementById('map_button');

gsap.to([imgElement,container], {
    opacity: 0,
    duration: 0.8,
    x: -40, //-40
    overwrite: true,
    onComplete: () => {
    const newTableHTML1 = `Stop Locations by Sex`;
    const newTableHTML2 = `Stop Locations by Race Description`;
    const sex_src = 'img/sexmap.png';
    const race_src = 'img/racemap.png';

    container.innerHTML = sexMap ? newTableHTML2 : newTableHTML1;
    imgElement.src = sexMap ? race_src : sex_src;
    sexMap = !sexMap;

    gsap.fromTo([imgElement,container],
        { opacity: 0, x: -60}, //-60
        { opacity: 1, x: 0, duration: 1, overwrite: true }
    );
    }
});

map_button.innerHTML = sexMap ? `View by Sex` : `View by Race`;

newDescHTML1 = `
        <h1><strong>NYC Stop Map<br>by Race</strong></h1>
        <p>This map plots every recorded police stop across NYC, with each point color-coded by the race of the person stopped. Black individuals are overwhelmingly represented, making up the majority of stop locations throughout the city.</p>`;
newDescHTML2 = `
        <h1><strong>NYC Stop Map<br>by Sex</strong></h1>
        <p>In the other version of this map, stops are color-coded by sex: blue for male and red for female. Blue clearly dominates the map, showing that the vast majority of police stops involve male individuals, with female stops barely visible in comparison.</p><br>`;
const newDescHTML = sexMap ? newDescHTML1 : newDescHTML2;

gsap.to(desc, {
    opacity: 0,
    duration: 0.8,
    x: 20,
    onComplete: () => {
        desc.innerHTML = newDescHTML;

        gsap.fromTo(desc,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 1 }
        );
    }
});
}

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#navbar'
});
