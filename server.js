const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
}); 

app.get('/temperature', (req, res) => {
  res.sendFile(__dirname + '/public/temperature.html');
});

app.get('/length', (req, res) => {
  res.sendFile(__dirname + '/public/length.html');
});

app.get('/weight', (req, res) => {
  res.sendFile(__dirname + '/public/weight.html');
});

app.get('/temp-result', (req, res) => {
    res.sendFile(__dirname + '/public/temp-result.html');
});

app.get('/length-result', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'length-result.html'));
});

app.get('/weight-result', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'weight-result.html'));
});

app.post('/temperature', (req, res) => {

    const value = Number(req.body.temperature);
    const conversion = req.body.conversion;

    let result;
    let unit;

    if (conversion === 'celsius') {
        result = (value - 32) * 5 / 9;
        unit = 'Celsius';
    }
    else if (conversion === 'fahrenheit') {
        result = (value * 9 / 5) + 32;
        unit = 'Fahrenheit';
    }

    res.redirect(`/temp-result?value=${result}&unit=${unit}`);
});


app.post('/length', (req, res) => {

    const value = Number(req.body.length);
    const conversion = req.body.conversion;

    let result;
    let unit;

    if (conversion === 'meters') {
        result = value / 100;
        unit = 'Meters';
    }

    else if (conversion === 'feet') {
        result = value / 30.48;
        unit = 'Feet';
    }

    res.redirect(`/length-result?value=${result}&unit=${unit}`);

});


app.post('/weight', (req, res) => {

    const value = Number(req.body.weight);
    const conversion = req.body.conversion;

    let result;
    let unit;

    if (conversion === 'kilograms') {
        result = value / 1000;
        unit = 'Kilograms';
    }

    else if (conversion === 'pounds') {
        result = value / 2.20462;
        unit = 'Pounds';
    }

    res.redirect(`/weight-result?value=${result}&unit=${unit}`);
}); 

app.listen(3000, () => {
  console.log('Server is running on  http://localhost:3000');
});