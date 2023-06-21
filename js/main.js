'use strict';

window.onload = function () {
  const submitBtn = document.querySelector('.ptf-form .btn.btn-dark');
  const contactForm = document.querySelector('.ptf-form');
  const spinner = document.querySelector('.spinner-grow');
  const contactMessage = document.querySelector('.contact-message');

  // Changes skill icons on click
  document.querySelectorAll('.items .item').forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelector('.item.selected').classList.remove('selected');
      item.classList.add('selected');
      document.querySelector('.items-details.show').classList.remove('show');
      document.querySelectorAll('.items-details')[index].classList.add('show');
    });
  });

  // Updating year in footer
  document.getElementById('copyright').innerHTML =
    `Copyright&nbsp;&copy; ` + new Date().getFullYear();
};
