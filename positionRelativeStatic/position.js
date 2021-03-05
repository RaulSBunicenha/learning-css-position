const firstItemElement = document.querySelector('.first')

const secondItemElement = document.querySelector('.second')

firstItemElement.addEventListener('click', function (event) {
    this.classList.remove('active')
    secondItemElement.classList.add('active')
})

secondItemElement.addEventListener('click', function (event) {
    this.classList.remove('active')
    firstItemElement.classList.add('active')
})