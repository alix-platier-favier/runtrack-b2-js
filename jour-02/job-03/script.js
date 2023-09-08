
document.addEventListener("DOMContentLoaded", function () {
    let textDisplay = document.querySelector("#text-displayer");
    let inputText = document.querySelector("#input-text");
    let btnBold = document.querySelector("#turn-text-bold");
    let btnItalic = document.querySelector("#turn-text-italic");
    let btnClear = document.querySelector("#clear-text");

    function myDisplayText() {
        textDisplay.textContent = inputText.value;
    }

    function myTurnTextBold() {
        textDisplay.style.fontWeight = "bold";
    }

    function myTurnTextItalic() {
        textDisplay.style.fontStyle = "italic";
    }

    function myClearText() {
        textDisplay.textContent = "";
        inputText.value = "";
    }

    inputText.addEventListener("input", myDisplayText);
    btnBold.addEventListener("click", myTurnTextBold);
    btnItalic.addEventListener("click", myTurnTextItalic);
    btnClear.addEventListener("click", myClearText);
});
