var slideIndex = 0;
var i;
const slides = document.getElementsByClassName("mySlides");
function nextImage(){
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block"; 
}
// script for auto image slider
setInterval(nextImage , 4000); 