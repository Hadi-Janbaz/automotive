const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.use(express.static(path.join(__dirname,'public')));
hbs.registerPartials(path.join(__dirname,'views/partials'));

app.set('view engine','hbs');
app.get('/',(req,res) => {
    res.render('home',{
        pagetitle:'AutoMotive Project'
    });
});

app.listen(3000,() => {
    console.log('Server is runing on port 3000 !');
})