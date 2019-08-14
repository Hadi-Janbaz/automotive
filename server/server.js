const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public')));
hbs.registerPartials(path.join(__dirname, '../views/partials'));


app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Automotive Project'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});