const images = document.getElementById('img');
let array = []

fetch('http://localhost:3000/princecoat')
    .then(response => response.json())
    .then(data => {
        array = data;

        let numberOfImages = array.length;
        let i = 0;
        while (i<numberOfImages){
            const colDiv = document.createElement('div');
            colDiv.className = 'col';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';

            const img = document.createElement('img');
            img.src = `public/princecoat/${array[i]}`;
            img.className = 'card-img-top';
            img.alt = 'princecoat';

            cardDiv.appendChild(img);
            colDiv.appendChild(cardDiv);
            images.appendChild(colDiv);

            i++;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

