// detect if mobile
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// get the element by class
const titleElement = document.querySelector('.title');

if (titleElement) {
  if (isMobile) {
    titleElement.id = "mobileHead";
  } else {
    titleElement.id = "h1Head";
  }
}

