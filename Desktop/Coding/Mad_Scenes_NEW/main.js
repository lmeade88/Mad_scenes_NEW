//* Responsive video

function adjustVideoSize() {
    const videoContainer = document.querySelector('.container');
    const video = document.querySelector('.fullscreen-video');
    
    // Get the dimensions of the video
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    // Get the dimensions of the container
    const containerWidth = videoContainer.clientWidth;
    const containerHeight = videoContainer.clientHeight;

    // Calculate the aspect ratio of the video
    const videoAspectRatio = videoWidth / videoHeight;

    // Calculate the aspect ratio of the container
    const containerAspectRatio = containerWidth / containerHeight;

    // Adjust the video size based on the aspect ratios
    if (videoAspectRatio > containerAspectRatio) {
        // Video is wider than the container
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        // Video is taller than the container
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}


//* Nav Bar Animation

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#nav-bar');
    const triggerPoint = document.querySelector('.trigger');

    // Get the position of the trigger point relative to the viewport
    const triggerPosition = triggerPoint.getBoundingClientRect().top;

    // If the trigger point is above the top of the viewport, add the active class
    if (triggerPosition < 0) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});


//* Fade to White

window.addEventListener('scroll', function() {
    var vidContainer = document.querySelector('.vidContainer');
    var scrollTop = window.scrollY;
    var opacity = 1 - (scrollTop / window.innerHeight); // Adjust the factor as needed

    // Limit opacity value between 0 and 1
    opacity = Math.max(0, Math.min(1, opacity));

    // Apply the opacity
    vidContainer.style.opacity = opacity;
});


//* Arrow-Scroll

document.querySelector('#arrow-bottom').addEventListener('click', function() {
    // The element to scroll to
    const targetSection = document.querySelector('#target');
    
    // Scroll to the element
    window.scrollTo({
        top: targetSection.offsetTop, // Position from the top of the document
        behavior: 'smooth' // Smooth scroll
    });
});


/**Burger Menu */

const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay-menu');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    // Toggle the display of the menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        burger.textContent = '\u2630'; // Change the burger icon back to three bars
    } else {
        menu.style.display = 'block';
        burger.textContent = '\u2715'; // Change the burger icon to an X
    }
});

// Add a scroll event listener to hide the menu when scrolling
window.addEventListener('scroll', function() {
    burger.textContent = '\u2630';
    menu.style.display = 'none';
    close.style.display = 'none';
});



