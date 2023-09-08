let countButton = document.querySelector("#add-count-btn");
let countDisplay = document.querySelector("#count-displayer");
let count = 0;

function myAddCount() {
    count++;
    countDisplay.textContent = count;
}

countButton.addEventListener("click", myAddCount);

