let box = document.getElementById('div-box'); //select the div tag
let radius = document.querySelector('#radius'); //select the range input
let output = document.querySelector('.radius-output');
let borderRadVals = [ 0, 0, 0, 0];

const [a, b, c, d] = borderRadVals;

output.textContent = radius.value;

radius.addEventListener('input', () => {
    output.textContent = radius.value;
    setBorderRadius(borderRadVals);
    console.log(borderRadVals);
    box.style.borderRadius = `${a}% ${b}% ${c}% ${d}%`;
})




let setBorderRadius = (arr) => {
    for(let val in arr){
        val = radius.value;
    }

}