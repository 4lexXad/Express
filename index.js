/* Importación del módulo express y creación de una aplicación express. */
const express = require('express');
const app = express();
const port = 3000;

/* Un controlador de ruta. Es una función que se llama cuando el usuario visita la ruta. */
app.get('/Mensaje_de_Ejemplo', function (req, res) {
    res.send('Hola :3')
});

/* Escuchando el puerto e imprimiendo un mensaje a la consola. */
app.listen(port, () => {
    console.log(`Ejemplo lanzado en el puerto local ${port}`)
});

/* Diciéndole al servidor que use la carpeta pública como la carpeta raíz. */
app.use('/' , express.static('public'));