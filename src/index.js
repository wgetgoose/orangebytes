const smallMediaQuery = window.matchMedia('screen and (max-width: 1279px)');
smallMediaQuery.addEventListener("resize", dyanmicMiddleText());

dyanmicMiddleText();
function dyanmicMiddleText() {
    if (smallMediaQuery.matches) {
        let right = document.getElementById('rightText');
        right.textContent = "Orangebytes works by allowing you to direct access to a skilled technician who has the ability to solve a broad range of tech-related issues."
        const paras = document.getElementsByClassName('circleParagraph');
        while(paras[0]) {
            paras[0].parentNode.removeChild(paras[0])
        };
        const circles = Array.from(document.getElementsByClassName('invisibleBox'));
        circles.forEach(element => {
            element.style.cssText = "display: flex; align-items: center;"
        });
        return;
    };
};