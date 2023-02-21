let box = document.getElementById('div-box'); //select the div tag
let radius = document.querySelector('#radius'); //select the range input
let output = document.querySelector('.radius-output');

const borderSides = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
}

output.textContent = radius.value;

radius.addEventListener('input', () => {
    const {a, b, c, d}  = borderSides;
    output.textContent = radius.value;
    console.log(`output: ${output.textContent}`);
    setBorderRadius(a, b, c, d);
})

const setBorderRadius = (a, b, c, d) => {
    for(const side in borderSides){
        borderSides[side] = radius.value;
        console.log(borderSides[side]);
    }
    box.style.borderRadius = `${a}% ${b}% ${c}% ${d}%`;

}


