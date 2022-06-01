const smallMediaQuery = window.matchMedia('screen and (max-width: 1279px)');
window.addEventListener('resize', dyanmicMiddleText)

dyanmicMiddleText();
function dyanmicMiddleText() {
    let right = document.getElementById('rightText');
    console.log("running");
    const paras = Array.from(document.getElementsByClassName('circleParagraph'));
    const circles = Array.from(document.getElementsByClassName('invisibleBox'));
    if (smallMediaQuery.matches) {
        console.log("matches")
        right.textContent = "Orangebytes works by allowing you to direct access to a skilled technician who has the ability to solve a broad range of tech-related issues."
        paras.forEach(element => {
            element.style.cssText = "display: none"
        });
        circles.forEach(element => {
            element.style.cssText = "display: flex; align-items: center;"
        });
        return;
    };
    right.textContent =

    `Orangebytes is a volunteer organization run by Carson Ferreira. We strive to
    help educate the elderly residents of Orange County about our new world run by technology.
    Sending emails, explaining what "the cloud" even is, and setting up Wi-Fi are all services we offer.
    If you have any other problems, just email us! We're more than happy to help. Make sure to read more below.`
    
    paras.forEach(e => {e.style.cssText = "display: block"});
    circles.forEach(e => {e.style.cssText = "display: flex; justify-content: center;"});
};

let button = document.getElementsByClassName("contactUs");
button[0].addEventListener("click", transitionButton);
function transitionButton() {
    window.location.href = "./contact-us"
}