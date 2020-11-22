
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click',CloseoutModal);
window.addEventListener('keydown',CloseEsc);
// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

function CloseoutModal(e){
  if(e.target==modal){
    modal.style.display='none';
  }
}

function keyPress (e) {
  if(e.key === "Escape") {
    modal.style.display='none';
  }
}

 function CloseEsc(e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none'
  }
}