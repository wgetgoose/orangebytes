const smallMediaQuery = window.matchMedia('(max-width: 1279px');
smallMediaQuery.addEventListener("resize", dyanmicMiddleText());


dyanmicMiddleText();
function dyanmicMiddleText() {
    console.log(smallMediaQuery.matches)
    if (smallMediaQuery.matches) {
        let right = document.getElementById('rightText');
        right.textContent = "Orangebytes works by allowing you to direct access to a skilled technician who has the ability to solve a broad range of tech-related issues."
        return;
    }
    else {return;}
}