require('./config/config')
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/usuario', (req, res) => {
    res.json('Im get')
})



app.post('/usuario', (req, res) => {
    let body = req.body;
    res.json({
        body
    })
})


app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})


app.delete('/usuario', (req, res) => {
    res.json('im delete')
})



app.listen(process.env.PORT, () => {
    console.log("server is  working")
});