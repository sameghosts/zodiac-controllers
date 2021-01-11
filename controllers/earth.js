const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//water sign routes
ROUTER.get('/', (req, res) => {
  res.render('earth', {
    earthSigns: [
      'Capricorn (cardinal)', 
      'Taurus (fixed)',
      'Virgo (mutable)'
    ],
    traits: [
      'Grounded',
      'Helpful',
      'Practical',
      'Realistic',
      'Materialistic',
      'Dependable'
    ]
  })
});
//capricorn route
ROUTER.get('/capricorn', (req, res) => {
  res.render('capricorn');
});
//taurus route
ROUTER.get('/taurus', (req, res) => {
  res.render('taurus');
});

//virgo route
ROUTER.get('/virgo', (req, res) => {
  res.render('virgo');
});

module.exports = ROUTER;