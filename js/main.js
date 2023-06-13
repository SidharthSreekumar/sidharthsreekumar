'use strict';

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

window.onload = function () {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    spinner.classList.remove('hidden');

    emailjs.sendForm('service_gmail', 'template_portfolio', this).then(
      function () {
        contactForm.reset();
        spinner.classList.add('hidden');
        contactMessage.classList.remove('hidden');
        contactMessage.innerHTML = `Thank you for getting in touch! <br />
              I appreciate your interest and will get back to you shortly.`;
        setTimeout(() => {
          contactMessage.classList.add('hidden');
        }, 10000);
      },
      function (error) {
        spinner.classList.add('hidden');
        contactMessage.classList.remove('hidden');
        contactMessage.innerHTML = `Your message could not be sent. Please try again or send your message to <a href="mailto:sidarth.sreekumar@gmail.com">sidarth.sreekumar@gmail.com</a>`;
        setTimeout(() => {
          contactMessage.classList.add('hidden');
        }, 10000);
      }
    );
  });
};
