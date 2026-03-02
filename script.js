// Wait for the entire webpage to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Select all the images inside our hero slider container
    const slides = document.querySelectorAll(".slider-container .slide");
    
    // Keep track of which image is currently visible
    let currentSlide = 0;
    
    // Set the timing for the transition (2000 milliseconds = 2 seconds)
    const slideInterval = 2000; 

    function nextSlide() {
        // Step 1: Remove the 'active' class from the current image to fade it out
        slides[currentSlide].classList.remove("active");
        
        // Step 2: Calculate the next image in the sequence. 
        // The '%' (modulo) operator ensures it loops back to the first image after the last one.
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Step 3: Add the 'active' class to the new image to fade it in
        slides[currentSlide].classList.add("active");
    }

    // Step 4: Start the timer, but only if the images actually exist on the page
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
});
