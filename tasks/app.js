const express = require('express');
const app = express();
const port = 5000;

app.get('/message', (req, res) => {
    res.json({ message: 'Deuxième application' })
})

app.listen(port, () => {
    console.log(`Exemple app listening at http://localhost:${port}`)
})