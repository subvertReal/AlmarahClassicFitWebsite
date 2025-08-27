document.getElementById('getImage').addEventListener('click', function() {
    let password = document.getElementById('password').value;
    let url = `http://127.0.0.1:3000/getImage?password=${encodeURIComponent(password)}`;
    
    window.open(url, '_blank');
});

document.getElementById('uploadImage').addEventListener('click', function() {
    let password = document.getElementById('password').value;
    let files = document.getElementById('files').files;
    let category = document.getElementById('category').value;
    if (files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    // Map category to endpoint
    let endpoints = {
        'kurta collection': 'http://127.0.0.1:3000/uploadImageKurtaCollect',
        'kurta shalwar': 'http://127.0.0.1:3000/uploadImageKurtaShalwar',
        'princecoat': 'http://127.0.0.1:3000/uploadImagePrincecoat',
        'shawls': 'http://127.0.0.1:3000/uploadImageShawls',
        'sherwani': 'http://127.0.0.1:3000/uploadImageSherwani',
        'shoes': 'http://127.0.0.1:3000/uploadImageShoes',
        'turban': 'http://127.0.0.1:3000/uploadImageTurban',
        'waistcoat': 'http://127.0.0.1:3000/uploadImageWaistcoat'
    };

    let endpoint = endpoints[category.toLowerCase()];
    if (!endpoint) {
        alert('Unsupported category selected.');
        return;
    }

    // Helper to upload one file
    function uploadFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                let result = e.target.result;
                let filename = file.name;
                if (!result || !filename) {
                    reject('Missing filename or base64 data');
                    return;
                }
                let base64Data = result.includes(',') ? result.split(',')[1] : null;
                if (!base64Data || base64Data.trim() === '') {
                    reject('Could not extract base64 data from file.');
                    return;
                }

                fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        password: password,
                        filename: filename,
                        base64: base64Data
                    })
                })
                .then(response => response.json())
                .then(result => {
                    if (result.error) {
                        reject(result.error);
                    } else {
                        resolve(result.message);
                    }
                })
                .catch(error => {
                    reject('Error uploading file: ' + error);
                });
            };
            reader.readAsDataURL(file);
        });
    }

    // Upload each file individually
    let uploadPromises = [];
    for (let i = 0; i < files.length; i++) {
        uploadPromises.push(uploadFile(files[i]));
    }

    Promise.allSettled(uploadPromises).then(results => {
        let messages = results.map((r, idx) => {
            if (r.status === 'fulfilled') {
                return `File ${files[idx].name}: ${r.value}`;
            } else {
                return `File ${files[idx].name}: ${r.reason}`;
            }
        });
        alert(messages.join('\n'));
    });
});

document.getElementById('delete').addEventListener('click', function() {
    let password = document.getElementById('password').value;
    let url = `http://127.0.0.1:3000/delete?password=${encodeURIComponent(password)}`;
    
    window.open(url, '_blank');    
});