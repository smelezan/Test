const express = require('express');
const app = express();
const port = 4000;

app.get('/message', (req,res) => {
    res.json({ message: 'Première application' })
})

app.listen(port, () =>{
    console.log(`Exemple app listening at http://localhost:${port}`)
})