function loadImage() {
    const imageContainer = document.getElementById('imageContainer');
    const loadingText = document.getElementById('loadingText');
    const loadedImage = document.getElementById('loadedImage');

    // Megjelenítjük a "Loading..." szöveget
    loadingText.style.display = 'block';

    // Elrejtjük a korábban betöltött képet
    loadedImage.src = '';
    loadedImage.style.display = 'none';
    let id = loadedImage.getAttribute("data-id");

    // A kép URL-je  ('https://dev.me/products/image-placeholder') //const imageUrl = `https://via.assets.so/album.png?id=${id}`;
    const imageUrl = `https://via.assets.so/game.jpg?id=${id}`;

    // Létrehozunk egy Promise-t a kép betöltésére
    const imagePromise = new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
            // Sikeres betöltés esetén
            resolve(imageUrl);
        };
        // vagy arrow függvénnyel
        // image.onload = () => resolve(imageUrl);
        
        image.onerror = function () {
            // Hiba esetén
            reject('Hiba a kép betöltése során.');
        };
        // vagy arrow függvénnyel
        // image.onerror = () => reject('Hiba a kép betöltése során.');

        loadedImage.setAttribute("data-id", id + 1);
        image.src = imageUrl;
    });


    // Promise kezelése
    imagePromise
        .then((url) => {
            // Sikeres betöltés esetén
            loadedImage.src = url;
            loadedImage.style.display = 'block';
            loadingText.style.display = 'none';
        })
        .catch((error) => {
            // Hiba esetén
            console.error(error);
            loadingText.innerHTML = 'Hiba történt a kép betöltése során.';
        });
}
