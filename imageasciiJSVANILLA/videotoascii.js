let video;
let videoCanvas = document.createElement('canvas');
let videoContext = videoCanvas.getContext('2d');
let videoascii = document.getElementById('videoascii');

window.loadVideo = function (event) {
    video = document.getElementById('video-output');
    video.src = URL.createObjectURL(event.target.files[0]);
    video.play();

    video.onplay = function () {
        drawAsciiFrame();
    };
};

function drawAsciiFrame() {
    if (video.paused || video.ended) {
        return;
    }
    videoContext.drawImage(video, 0, 0, videoCanvas.width/3, videoCanvas.height/3);
    let imageData = videoContext.getImageData(0, 0, videoCanvas.width/3, videoCanvas.height/3).data;
    let asciiFrame = convertToAscii(imageData, videoCanvas.width/3, videoCanvas.height/3);
    console.log(videoascii)
    videoascii.textContent = asciiFrame;
    requestAnimationFrame(drawAsciiFrame);
}

function convertToAscii(imageData, width, height) {
    let characters = "@%#*+=-:. ";
    const size = Math.round(255 / characters.length);
    let ascii = "";
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let index = (y * width + x) * 4;
            let grayscale = 0.2126 * imageData[index] + 0.7152 * imageData[index + 1] + 0.0722 * imageData[index + 2];
            let charIndex = Math.floor(grayscale / size);
            ascii += characters[charIndex];
        }
        ascii += "\n";
    }
    return ascii;
}