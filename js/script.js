const hamburgerButton = document.querySelector('#hamburgerButton')
const header = document.querySelector('.header')
hamburgerButton.addEventListener('click', () => {
  header.classList.toggle('open')
})