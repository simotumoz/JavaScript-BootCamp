const colors = ["#2596be", "#2587be", "#be4d25",
 "#f15025", "#2596be", "#49be25",
  "#be2596", "#bea925",  "#6c25be"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function genAndGetRandNumber(){
    return Math.floor(Math.random()*colors.length);
}


btn.addEventListener('click', function(){
    
    // we need a number between 0 and lenght of the color array - 1
    const randomNumber = genAndGetRandNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});