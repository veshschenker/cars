const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mAccess = require('./moduleAccess');

app.listen(3000,"0.0.0.0",() => {
    console.log('listening at port 3000');
})

app.get('/', (req, res) => {
    res.status(200).send('database sample application');
});

app.get('/api/carsapp', async (req, res) => {
    console.log("Getting all cars")
    const result = await mAccess.getCars();
    res.status(200).send(result);
});

app.get('/api/carsapp/:id', async (req, res) => {
    const id = req.params.id;
    console.log("Getting car with ID=" + id)
    const result = await mAccess.getCarsById(id);
    if(result){
        res.status(200).send(result);
        return;
    }
    res.sendStatus(404);
})

app.post('/api/carsapp', async (req, res) => {
    const body = req.body;
    try {
        const result = await mAccess.addCar(body);
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.status(501).send(error);
    }
})