//require and create express instance
const EXPRESS = require('express');
const EJSLAYOUTS = require('express-ejs-layouts');
const PATH = require('path');
const APP = EXPRESS();
//view engine
APP.set('view engine', 'ejs');
APP.use(EJSLAYOUTS);
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

//controllers

APP.use('/fire', require('./controllers/fire'));
APP.use('/water', require('./controllers/water'));
APP.use('/air', require('./controllers/air'));
APP.use('/earth', require('./controllers/earth'));

//home route
APP.get('/', (req, res) => {
  res.render('home');
});

//sign routes organized by cardnality according to original calendar

// //fire route
// APP.get('/fire', (req, res) => {
//   res.render('fire', {
//     fireSigns: [
//       'Aries (cardinal)', 
//       'Leo (fixed)', 
//       'Sagittarius (mutable)'
//     ], 
//     traits: [
//       'Passionate', 
//       'Strong Emotions', 
//       'Tempermental', 
//       'Energetic', 
//       'Accomplished', 
//       'Interesting'
//     ]
//   });
// });
//water route
// APP.get('/water', (req, res) => {
//   res.render('water', {
//     waterSigns: [
//       'Cancer (cardinal)', 
//       'Scorpio (fixed)',
//       'Pisces (mutable)'
//     ],
//     traits: [
//       'Private',
//       'Mysterious',
//       'Psychic',
//       'Charming',
//       'Emotional',
//       'Sensitive'
//     ]
//   })
// });
//air route
// APP.get('/air', (req, res) => {
//   res.render('air', {
//     airSigns: [
//       'Libra (cardinal)', 
//       'Aquarius (fixed)',
//       'Gemini (mutable)'
//     ],
//     traits: [
//       'Movement',
//       'Creativity',
//       'Action',
//       'Adventure',
//       'Exciting',
//       'Easily Provoked'
//     ]
//   })
// });
//earth route
// APP.get('/earth', (req, res) => {
//   res.render('earth', {
//     earthSigns: [
//       'Capricorn (cardinal)', 
//       'Taurus (fixed)',
//       'Virgo (mutable)'
//     ],
//     traits: [
//       'Grounded',
//       'Helpful',
//       'Practical',
//       'Realistic',
//       'Materialistic',
//       'Dependable'
//     ]
//   })
// });


APP.listen(8666);