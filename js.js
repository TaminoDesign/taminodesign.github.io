const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

// Set the autoplay interval (in milliseconds)
const autoplayInterval = 1500; // Change this value to adjust the speed

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == slides.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = slides.length - 1;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

// Autoplay functionality
setInterval(gotoNext, autoplayInterval);





        const circles = document.querySelectorAll('.circle');

        function setRandomInitialPositions() {
            circles.forEach(circle => {
                // Generate random positions within the document
                const x = Math.random() * (document.body.scrollWidth - circle.offsetWidth);
                const y = Math.random() * (document.body.scrollHeight - circle.offsetHeight);
                
                // Set the initial position
                circle.style.transform = `translate(${x}px, ${y}px)`;
            });
        }

        function moveCircles() {
            circles.forEach(circle => {
                // Generate random positions within the document
                const x = Math.random() * (document.body.scrollWidth - circle.offsetWidth);
                const y = Math.random() * (document.body.scrollHeight - circle.offsetHeight);
                
                // Set the new position with a smooth transition
                circle.style.transform = `translate(${x}px, ${y}px)`;
            });
        }

        // Set random initial positions
        setRandomInitialPositions();

        // Make circles visible after 10 seconds
        setTimeout(() => {
            circles.forEach(circle => {
                circle.style.opacity = '1'; // Change opacity to 1 to make them visible
            });
        }, 1000);

        // Move circles every 10 seconds
        setInterval(moveCircles, 10000);


function toggleHide() {
    var hiddenContent = document.getElementById("hiddenContent");
    if (hiddenContent.classList.contains("show")) {
        hiddenContent.classList.remove("show");
    } else {
        hiddenContent.classList.add("show");
    }
}






