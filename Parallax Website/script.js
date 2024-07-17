document.addEventListener("scroll", function() {
    const parallaxElements = document.querySelectorAll(".parallax");
    let scrollPosition = window.pageYOffset;
    parallaxElements.forEach(function(element) {
        let speed = element.getAttribute("data-speed");
        let offset = scrollPosition * speed / 10;
        element.style.backgroundPositionY = offset + "px";
    });
});
document.addEventListener("scroll", function() {
    const parallaxElements = document.querySelectorAll(".parallax");
    let scrollPosition = window.pageYOffset;
    parallaxElements.forEach(function(element) {
        let speed = element.getAttribute("data-speed");
        let offset = scrollPosition * speed / 10;
        element.style.backgroundPositionY = offset + "px";
        // Check if element is in viewport
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    });
});
