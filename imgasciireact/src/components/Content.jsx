import React, { useState } from 'react';
import './Content.css';

const Content = () => {
  const [asciiArt, setAsciiArt] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const ascii = convertToAscii(img);
          setAsciiArt(ascii);
        };
      };
      reader.readAsDataURL(file);
    }
    document.getElementById("asciiimg").classList.add("dot");
  };

  const convertToAscii = (media) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');


    ctx.drawImage(media, 0, 0, canvas.width / 3, canvas.height / 3);

    const imgData = ctx.getImageData(0, 0, canvas.width / 3, canvas.height / 3);
    const pixels = imgData.data;

    const asciiChars = "@%#*+=-:. "; // Caracteres ASCII de mayor a menor densidad

    let ascii = '';

    for (let y = 0; y < canvas.height / 3; y++) {
      let line = '';
      for (let x = 0; x < canvas.width / 3; x++) {
        const offset = (y * canvas.width / 3 + x) * 4;
        const r = pixels[offset];
        const g = pixels[offset + 1];
        const b = pixels[offset + 2];
        const avg = (r + g + b) / 3;
        const charIndex = Math.floor((avg / 255) * (asciiChars.length - 1));
        line += asciiChars[charIndex];
      }
      ascii += line + '\n';
    }

    return ascii;
  };


  return (

    <div className="main">
      <div className="input">
        <input type="file" id='asciiart' accept="image/*" onChange={handleImageUpload} />
      </div>
      <div className="pre" id='asciiimg'>
        <pre >{asciiArt}</pre>
      </div>
      
    </div>

  );
};

export default Content;
