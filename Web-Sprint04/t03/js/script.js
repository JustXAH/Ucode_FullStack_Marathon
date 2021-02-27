let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let timeId = 0;

showSlides(slideIndex, true);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n, false);
}

function showSlides(n) {
    let i;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    clearInterval(timeId);
    timeId = setInterval(showSlides, 3000, slideIndex += 1);
}