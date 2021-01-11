//require and create express instance
const EXPRESS = require('express');
const APP = EXPRESS();
const EJSLAYOUTS = require('express-ejs-layouts');

//view engine
APP.set('view engine', 'ejs');
APP.use(EJSLAYOUTS);

//home route
APP.get('/', (req, res) => {
  res.render('home');
});
//water route
//air route
//fire route
//earth route

APP.listen(8666);