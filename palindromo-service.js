const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware para analizar el cuerpo de las solicitudes POST
app.use(bodyParser.json());

// Función para eliminar espacios y caracteres especiales de una cadena
function cleanString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Función para verificar si una cadena es un palíndromo
function isPalindrome(str) {
  const cleanedStr = cleanString(str);
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

// Ruta POST para verificar si una palabra es un palíndromo
app.post('/verificar-palindromo', (req, res) => {
  const palabra = req.body.palabra;

  if (!isNaN(palabra)) {
    res.send('No se pudo identificar palabra');
  } else if (isPalindrome(palabra)) {
    res.send('Es palíndroma');
  } else {
    res.send('No es palíndroma');
  }
});

// Puerto en el que el servidor escucha las solicitudes
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});