const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function genAndGetRandNumber(){
    return Math.floor(Math.random()*hex.length);
}

btn.addEventListener('click', function(){
    let hexVal = '#';
    for(let i = 0; i < 6; i++){
        hexVal += hex[genAndGetRandNumber()];
    }

    color.textContent = hexVal;
    document.body.style.backgroundColor = hexVal.toString();
    
})
