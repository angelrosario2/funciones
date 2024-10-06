let color = '';

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    switch(key) {
        case 'a':
            color = 'pink';
            break;
        case 's':
            color = 'orange';
            break;
        case 'd':
            color = 'lightblue';
            break;
        case 'q':
            createDiv('purple');
            break;
        case 'w':
            createDiv('gray');
            break;
        case 'e':
            createDiv('brown');
            break;
        default:
            color = '';
    }

    if (color) {
        document.getElementById('key').style.backgroundColor = color;
    }
});

function createDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}
