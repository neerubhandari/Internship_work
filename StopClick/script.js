var slideIndex = 0,i;
const slides = document.getElementsByClassName("mySlides");
const container = document.querySelector('.container');
function nextImage(){
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block"; 
  resetTimer();
}
//reset timer
function resetTimer(){ 
  clearInterval(timer);
  timer=setInterval(nextImage,4000);
}
// script for auto image slider
let timer=setInterval(nextImage , 4000); 
container.addEventListener('mouseenter', () => {
  clearInterval(timer);
});
container.addEventListener('mouseleave', nextImage);