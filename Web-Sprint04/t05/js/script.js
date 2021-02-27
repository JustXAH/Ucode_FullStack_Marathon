let rhombus = document.querySelector('body');

let state = {
    offsetX: 0,
    offsetY: 0,
    target: null
}

rhombus.addEventListener('dblclick', (event) => {
    const target = event.target;

    if (target && target.classList.contains('rhombus')) {
        if (target.getAttribute('value') === 'on') {
            target.setAttribute('value', 'off')
        }
        else {
            target.setAttribute('value', 'on')
        }
    }
});

rhombus.addEventListener('mousedown', (event) => {
    if (event.target && event.target.classList.contains('rhombus')
        && event.target.getAttribute('value') === 'on') {
        state.target = event.target;
        state.offsetX = event.offsetX;
        state.offsetY = event.offsetY;
    }
});

rhombus.addEventListener('mouseup', () => {
    state.target = null;
});

rhombus.addEventListener('mouseover', (event) => {
    if (state.target) {
        state.target.style.left = event.pageX - state.offsetX + 'px';
        state.target.style.top = event.pageY - state.offsetY + 'px';
    }
});
