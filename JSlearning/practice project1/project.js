document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("colorchange");
    button.addEventListener('click', generateColor);
});

function generateColor() {
    const colors = [];
    for (let i = 0; i < 3; i++) {
        const color = Math.floor(Math.random() * 256);
        colors.push(color);
    }
    const rgbCode = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    document.body.style.backgroundColor = rgbCode;

    
}