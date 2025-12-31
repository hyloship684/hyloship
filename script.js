


document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll('.main-card');
  let index = 0;

  if (cards.length > 0) {
    setInterval(() => {
      cards.forEach(card => card.classList.remove('active'));
      cards[index].classList.add('active');
      index = (index + 1) % cards.length;
    }, 4000);
  }

});


// Dropdown ke andar anchor scroll
document.querySelectorAll('.dropdown-item[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // prevent default link behavior
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


