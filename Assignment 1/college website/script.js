document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0; // Start from the first slide
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex >= slides.length) {slideIndex = 0} // Reset index if it reaches the last slide
        slides[slideIndex].style.display = "block";  
        slides[slideIndex].classList.add("slide");
        setTimeout(showSlides, 5000); // Change slide every 5 seconds (adjust as needed)
    }
});
