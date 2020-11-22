//*****************Slider Start********************** */
const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;
let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
slide.append(firstClone);
slide.prepend(lastClone);
const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;
console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');
slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});
slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);
startSlide();


/*****************Slider End********************** */
const collection =document.querySelector('.allcollection');

//winter
const winter =document.querySelector('.winter');
const winterbutton =document.querySelector('#yes');
winterbutton.addEventListener('click',openWinter);
function openWinter(){
 winter.style.display="block";
collection.style.display="none";
spring.style.display="none";
summer.style.display="none";
fall.style.display="none";
 winterbutton.style.backgroundColor = "#e98923";
 winterbutton.style.color = "#fff";
 fallbutton.style ="none";
 summerbutton.style ="none";
 springbutton.style ="none";
}

//spring
const spring =document.querySelector('.spring');
const springbutton =document.querySelector('#spring');
springbutton.addEventListener('click',openSpring);
function openSpring(){
 spring.style.display="block";
collection.style.display="none";
winter.style.display="none";
summer.style.display="none";
fall.style.display="none";
springbutton.style.backgroundColor = "#e98923";
springbutton.style.color = "#fff";
fallbutton.style ="none";
winterbutton.style ="none";
summerbutton.style ="none";
}

//summer
const summer =document.querySelector('.summer');
const summerbutton =document.querySelector('#summer');
summerbutton.addEventListener('click',openSummer);
function openSummer(){
  summer.style.display="block";
collection.style.display="none";
winter.style.display="none";
spring.style.display="none";
fall.style.display="none";
summerbutton.style.backgroundColor = "#e98923";
summerbutton.style.color = "#fff";
fallbutton.style ="none";
winterbutton.style ="none";
springbutton.style ="none";
}

//fall
const fall =document.querySelector('.fall');
const fallbutton =document.querySelector('#fall');
fallbutton.addEventListener('click',openFall);
function openFall(){
  fall.style.display="block";
collection.style.display="none";
winter.style.display="none";
spring.style.display="none";
summer.style.display="none";
fallbutton.style.backgroundColor = "#e98923";
fallbutton.style.color = "#fff";
winterbutton.style ="none";
springbutton.style ="none";
summerbutton.style ="none";
}

const popular =document.querySelector('.allpopular');

//trending
const trendingbutton =document.querySelector('#trending');
trendingbutton.addEventListener('click',openTrending);
trendingbutton.style.color = "#e98923";
function openTrending(){
 popular.style.display="block";
 sale.style = "none";
 newitem.style = "none";
 bestsellerbutton.style = "none";
salebutton.style="none";
newbutton.style="none";
bestsellerbutton.style = "none";
}
//bestseller
const bestseller =document.querySelector('.bestseller');
const bestsellerbutton =document.querySelector('#bestseller');
bestsellerbutton.addEventListener('click',openBest);
function openBest(){
 bestseller.style.display="block";
bestsellerbutton.style.color = "#e98923";
popular.style.display="none";
sale.style.display="none";
newitem.style.display="none";
trendingbutton.style="none";
salebutton.style="none";
newbutton.style="none";

}

//new
const newitem =document.querySelector('.new');
const newbutton =document.querySelector('#new');
newbutton.addEventListener('click',openNew);
function openNew(){
 newitem.style.display="block";
popular.style.display="none";
sale.style.display="none";
bestseller.style.display="none";
newbutton.style.color = "#e98923";
bestsellerbutton.style = "none";
trendingbutton.style = "none";
salebutton.style="none";
}

//on sale
const sale =document.querySelector('.itemsale');
const salebutton =document.querySelector('#sale');
salebutton.addEventListener('click',openSale);
function openSale(){
 sale.style.display="block";
popular.style.display="none";
newitem.style.display="none";
bestseller.style.display="none";
salebutton.style.color = "#e98923";
newbutton.style="none";
trendingbutton.style="none";
bestsellerbutton.style="none";
}

