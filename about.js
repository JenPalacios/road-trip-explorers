import './about.css';

const button = document.getElementById('fist-bump');

button.addEventListener('click',e => {
  button.classList.toggle('on');
},false);

button.addEventListener("transitionend", myEndFunction);

function myEndFunction() {
  button.classList.remove('on');
}