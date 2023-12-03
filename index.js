const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)


app.get('/client', (req, res)=> {
    res.status(200).send({
        name: 'kalong',
        email: 'kaxm462@gmail.com'
    })
});

app.post('/client/:id', (req, res) => {

    const { id } = req.params;
    const { phone } = req.body;

    if (!phone) {
        res.status(418).send({ message: 'Missing phone number information!'})
    }

    res.send({
        client: ` Client with your ${phone} and ID of ${id}` ,
    })
})