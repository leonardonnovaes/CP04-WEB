let currentSlide = 0

function showSlide() {
    const slides = document.querySelectorAll(".Banner img");
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}
setInterval(showSlide, 2000);