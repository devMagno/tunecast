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


const buttons = document.querySelectorAll('.buttons__button')
const forms = document.querySelectorAll('.section__form')
buttons.forEach((el, index) => {
  el.addEventListener('click', () => switchForms(index))
})

function switchForms(index, event) {
  buttons.forEach(button => {
    button.classList.remove('buttons__button--purple')
  })
  forms.forEach(form => {
    form.classList.remove('active')
  })
  forms[index].classList.add('active')
  buttons[index].classList.add('buttons__button--purple')
}