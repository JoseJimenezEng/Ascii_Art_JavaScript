# ASCII Art Converter
Este proyecto es una aplicación en React que permite convertir imágenes en arte ASCII. Sube una imagen y la aplicación la transformará en un conjunto de caracteres ASCII que representan la imagen.
## DEMO

**PRUEBA** ASCII ART JAVASCRIPT VANILLA (ASCII ART VIDEO E IMAGENES): https://asciiartjs.netlify.app/ 

**PRUEBA** ASCII ART REACT (ASCII ART SOLO IMAGENES): https://asciiartreact.netlify.app/

![image](https://github.com/user-attachments/assets/608e5515-00ac-4a73-9a85-1db62a5206aa)

![image](https://github.com/user-attachments/assets/6591852e-20d2-450d-a922-a3150349f02e)



Sube una imagen cualquiera, y verás cómo se transforma en una representación en ASCII en la pantalla.
## Funcionamiento
1. recorremos cada píxel de la imagen fila por fila (y) y columna por columna (x). Luego, extraemos los valores de RGB de cada píxel y calculamos su promedio para determinar la luminosidad. Esa luminosidad determina el caracter a reemplazar el pixel. Luego, se se concatena caracter a caracter, que al final representa la imagen en forma de arte ASCII.
## Características
### -Conversión de imágenes a ASCII: 
Convierte cualquier imagen en arte ASCII utilizando una paleta de caracteres.
### -Interfaz simple: 
Sube una imagen y ve el resultado en arte ASCII instantáneamente.
### -Renderizado en tiempo real: 
El arte ASCII se genera en tiempo real cuando se carga una imagen.
## Tecnologías utilizadas
### -React: 
Biblioteca de JavaScript para construir interfaces.
### -HTML5 Canvas: 
Se utiliza para procesar la imagen y extraer los datos de los píxeles.
### -JavaScript: 
Para manejar la lógica de conversión y renderizado.
