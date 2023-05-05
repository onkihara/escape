   
export const torch = {
    update,
    getPosition
}

function update(e){
    let pos = getPosition(e);
    e.target.style.setProperty('--cursorX', pos.x + 'px');
    e.target.style.setProperty('--cursorY', pos.y + 'px');
}


function getPosition(e) {
    var x, y;
    if (e.clientX) {
        x = e.clientX;
    } else if (e.touches) {
        x = e.touches[0].clientX;
    } else {
        x = 0;
    }
    if (e.clientY) {
        y = e.clientY;
    } else if (e.touches) {
        y = e.touches[0].clientY;
    } else {
        y = 0;
    }
    return { x, y };
}