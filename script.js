const btn = document.getElementById('btn');
const text = document.getElementById('text');
const eBtn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const range = document.getElementById('range');
const square = document.getElementById('square');
const span = document.getElementById('range-span');


const colorSquare = function () {
    square.style.backgroundColor = text.value;
};

btn.addEventListener('click', colorSquare);

eBtn.style.display = 'none';

const rangeValue = function (event) {
    span.textContent = event.target.value;
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';

};

range.addEventListener('input', rangeValue);