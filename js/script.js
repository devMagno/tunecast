const hamburgerButton = document.querySelector('#hamburgerButton')
const header = document.querySelector('.header')
hamburgerButton.addEventListener('click', () => {
  header.classList.toggle('open')
})

const genderButtons = document.querySelectorAll('.genders__item')
genderButtons.forEach(el => {
  el.addEventListener('click', switchGender)
});

function switchGender(event) {
  const button = event.currentTarget

  genderButtons.forEach(el => {
    el.classList.remove('genders__item--purple')
  });

  button.classList.toggle('genders__item--purple')
}
