var slideIndex = 0;
var i;

const slider =document.querySelector('.slider');
const slides = document.getElementsByClassName("mySlides");

//Button
const prevBtn =document.querySelector('#prevBtn');
const nextBtn =document.querySelector('#nextBtn');

nextBtn.addEventListener('click',nextImage);
function nextImage(){
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block"; 
  resetTimer();
}
//Button Listeners for previous slide 
prevBtn.addEventListener('click',()=>{
  if (slideIndex<=0)return;
  for (i = 0; i > slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex--;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
});

//reset timer
function resetTimer(){
  // when click to indicator or controls button 
  // stop timer 
  clearInterval(timer);
  // then started again timer
  timer=setInterval(autoPlay,4000);
}


// script for auto image slider
let timer=setInterval(nextImage , 4000); 