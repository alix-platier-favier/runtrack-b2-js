//change color

function myChangeBackground() {
    let bg = window.outerWidth;
    if (bg < 504) {
        document.body.style.backgroundColor = "#003049";
    } else if (bg >= 505 && bg < 1336) {
        document.body.style.backgroundColor = "#d90429";
    } else {
        document.body.style.backgroundColor = "#ffb703";
    }
}