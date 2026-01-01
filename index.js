function adjustVideoPadding() {
                    var container = document.getElementById('videoContainer');
                    if (window.innerWidth < 768) {
                        container.style.paddingBottom = "56.25%"; // 16:9 aspect ratio for mobile
                    } else {
                        container.style.paddingBottom = "30%"; // original aspect ratio for desktop
                    }
                }
                window.addEventListener('resize', adjustVideoPadding);
                document.addEventListener('DOMContentLoaded', adjustVideoPadding);

var btn = document.getElementById('button1');

btn.addEventListener('click', function() {

    window.open('https://wa.me/+19054974684', '_blank');
});


var btn = document.getElementById('button2');

btn.addEventListener('click', function() {

    window.open('https://wa.me/+19054974684', '_blank');
});