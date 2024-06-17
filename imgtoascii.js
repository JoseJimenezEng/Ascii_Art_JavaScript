let imagen;
let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let finalimg = "";


loadFile = function (event) {
    imagen = document.getElementById('image-output');
    imagen.style.filter = 'grayscale(1)';
    imagen.src = URL.createObjectURL(event.target.files[0]);
    
    
    imagen.onload = function () {
        context.drawImage(imagen, 0, 0, canvas.width,  canvas.height);
        img2ascii(canvas.width, canvas.height);
    };
};

function img2ascii(width, height) {
    let characters = "@%#*+=-:. ";
    const size = Math.round(255 / characters.length);
    finalimg = "";

    //FORMA DOBLE FOR
    // for (let y = 0; y < height; y++) {
    //     for (let x = 0; x < width; x++) {
    //         let data = context.getImageData(x, y, 1, 1).data;
    //         let grayscale = 0.2126 * data[0] + 0.7152 * data[1] + 0.0722 * data[2];
    //         let charIndex = Math.floor(grayscale / size);
    //         finalimg += characters[charIndex];
    //     }
    //     finalimg += "\n";
    // }

    for (let k = 0; k < height * width; k++) {
        let y = Math.floor(k / width);
        let x = k % width;
        let data = context.getImageData(x, y, 1, 1).data;
        let grayscale = 0.2126 * data[0] + 0.7152 * data[1] + 0.0722 * data[2];
        let charIndex = Math.floor(grayscale / size);
        finalimg += (x < width - 1) ? characters[charIndex] : "\n";
    }
    getFinalImg();
}

function getFinalImg() {
    let ascii = document.getElementById("imgascii");
    ascii.textContent = finalimg;
}
