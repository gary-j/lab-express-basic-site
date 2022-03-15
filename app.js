const express = require('express');
app = express();
// HBS
app.set('view engine', 'hbs');


// Make everything inside of public/ available
app.use(express.static('public'));

// 1st route
app.get('/', (req, res, next)=>{
    res.render('home');
    // res.sendFiles(__dirname, + './views/index.hbs');
});

// Server Started
app.listen(3000, () => console.log('You\'re Good Gary !'));

