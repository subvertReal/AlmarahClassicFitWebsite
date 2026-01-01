// detect if mobile
const mob = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// get the element by id
const mapElement = document.querySelector('#map');
const btnMapelement = document.querySelector('#btnMap')

if (mapElement) {
  if (mob) {
    mapElement.className = "mapMobile";
    btnMapelement.className = "mapBtnMobile"
  } else {
    mapElement.className = "mapDesktop";
    btnMapelement.className = "mapBtnMobile"
  }
}
