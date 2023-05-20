const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
function openPopup() { popup.style.display = 'flex'; }
function closePopup() { popup.style.display = 'none'; }
closeBtn.addEventListener('click', closePopup);