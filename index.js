const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const container = document.querySelector('.container');

btn.onclick = function() {
    this.classList.toggle('active')
    body.classList.toggle('active')
    container.classList.toggle('active')
}