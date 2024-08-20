# ASCII Art Converter
Este proyecto es una aplicación en React que permite convertir imágenes en arte ASCII. Sube una imagen y la aplicación la transformará en un conjunto de caracteres ASCII que representan la imagen.
## DEMO
URL
Sube una imagen cualquiera, y verás cómo se transforma en una representación en ASCII en la pantalla.
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
## Instalación y uso
### 1. Clona este repositorio:

git clone https://github.com/JoseJimenezEng/Ascii_Art_JavaScript.git
Ingresa a la carpeta donde clonaste el repo
### 2. Instala las dependencias:
```
npm install
```
### 3. Inicia la aplicación:
```
npm run dev
```
## Sube una imagen:
En la página principal, selecciona una imagen usando el botón.
La imagen se convertirá automáticamente en arte ASCII y se mostrará en la pantalla.

## Personalización
Puedes modificar el conjunto de caracteres ASCII en la función convertToAscii dentro de Content.js para obtener diferentes efectos visuales.
```
const asciiChars = "@%#*+=-:. ";
```
