const images = document.getElementById('img');
const obj = document.getElementById('obj'); // Get the element with id 'obj'
let array = [];
fetch('http://127.0.0.1:4000/kurtaShalwar', {
    method: 'GET',
    mode: 'cors'
})
    .then(response => response.json())
    .then(data => {
        array = data.map(img => img.base64); // assuming each item has a 'base64' property


        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            console.log('Mobile resolution detected');
                    
        // Post one image in id 'test'
        const mobileResolution = document.getElementById('mobileResolution');
        if (array.length > 0 && mobileResolution) {
            array.forEach(src => {
                const imgElem = document.createElement('img');
                imgElem.src = src;
                imgElem.className = 'img-fluid';

                imgElem.style.display = 'block';

                imgElem.style.border = '5px solid white';
                mobileResolution.appendChild(imgElem);
            });
        }

        } else {
            console.log('Desktop resolution detected');
                    for (let i = 0; i < array.length; i += 3) {
            const row = document.createElement('div');
            row.className = 'row'; // Bootstrap row
            for (let j = i; j < i + 3 && j < array.length; j++) {
                const col = document.createElement('div');
                col.className = 'col-15 col-md-4'; // Responsive columns
                const imgElem = document.createElement('img');
                imgElem.src = array[j];
                imgElem.className = 'img-fluid'; // Bootstrap responsive image
                imgElem.style.margin = '5px';
                col.appendChild(imgElem);
                row.appendChild(col);
            }
            images.appendChild(row);
        }
        }




    })
    .catch(error => console.error('Error fetching images:', error));