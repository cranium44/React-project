var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
export function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
export function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].className.replace("mySlides_active", "mySlides_none");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].className.replace("mySlides_none", "mySlides_active");
  dots[slideIndex-1].className += " active";
}

 