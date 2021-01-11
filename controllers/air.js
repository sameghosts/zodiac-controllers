const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//water sign routes
ROUTER.get('/', (req, res) => {
  res.render('air', {
    airSigns: [
      'Libra (cardinal)', 
      'Aquarius (fixed)',
      'Gemini (mutable)'
    ],
    traits: [
      'Movement',
      'Creativity',
      'Action',
      'Adventure',
      'Exciting',
      'Easily Provoked'
    ]
  })
});
//libra route
ROUTER.get('/libra', (req, res) => {
  res.render('libra');
});
//aquarius route
ROUTER.get('/aquarius', (req, res) => {
  res.render('aquarius');
});

//gemini route
ROUTER.get('/gemini', (req, res) => {
  res.render('gemini');
});

module.exports = ROUTER;