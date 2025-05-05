// gsap scroll trigger
gsap.registerPlugin(ScrollTrigger);

// Fetch event data from JSON
fetch('events.json')
    .then(response => response.json() )
    .then(events => {
        const timeline = document.getElementById('timeline');

        // Dynamically create event elements
        events.forEach((event, index) => {
            const eventDiv = document.createElement('div');
            eventDiv.className = `event ${ index % 2 === 0 ? 'event-top' : 'event-bottomn' }`;

            eventDiv.innerHTML = `
            <a href="${event.link}" style="color:white;">
            <img src="${event.image}" alt="${event.title}">
            </a>
            <div class="event-content">
              <h3 class="event-title">${event.title}</h3>
              <p class="event-date">${event.date}</p>
              <p class="event-description">${event.description}</p>
            </div>
          `;

            timeline.appendChild(eventDiv);
        });

        // Initialize GSAP after events are added
        initializeScrollTrigger();
    })
    .catch(error => console.error('Error loading events:', error));





    
function initializeScrollTrigger() {
    const timeline = document.querySelector('.timeline');
    const timelineContainer = document.querySelector('.timeline-container');

    gsap.to(timeline, {
        x: () => -(timeline.scrollWidth - window.innerWidth) + "px",
        ease: "none",
        scrollTrigger: {
            trigger: timelineContainer,
            start: "top top",
            end: () => "+=" + (timeline.scrollWidth - window.innerWidth),
            scrub: true,
            pin: true,
        },
    });
}
