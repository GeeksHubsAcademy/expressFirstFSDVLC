const express = require('express');
const app = express();
const port = 3000;

const router = require('./router');

//Middleware
app.use(express.json())
app.use(router);

//Levantamos o inicializamos el servidor

app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
