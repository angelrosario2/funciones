const divs = ['div1', 'div2', 'div3', 'div4'];

divs.forEach(id => {
    const element = document.getElementById(id);
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'black';
    });
});
