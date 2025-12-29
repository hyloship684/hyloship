// Enable multi-level dropdown click on mobile & tablet
document.addEventListener("DOMContentLoaded", function () {

  // Submenu toggle (B2C → Shipping Types → items)
  document.querySelectorAll(".dropdown-submenu > a").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Close other open submenus
      document.querySelectorAll(".dropdown-submenu .dropdown-menu.show")
        .forEach(function (menu) {
          if (menu !== el.nextElementSibling) {
            menu.classList.remove("show");
          }
        });

      // Toggle current submenu
      el.nextElementSibling.classList.toggle("show");
    });
  });

});


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


