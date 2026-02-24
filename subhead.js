const element = document.getElementById('subhead');

function Mobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (element) {
    if (Mobile()) {
        element.classList.add('subHeadMobile');
    } else {
        element.classList.add('subHead1');
    }
}
