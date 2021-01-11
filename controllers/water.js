const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//water sign routes
ROUTER.get('/', (req, res) => {
  res.render('water', {
    waterSigns: [
      'Cancer (cardinal)', 
      'Scorpio (fixed)',
      'Pisces (mutable)'
    ],
    traits: [
      'Private',
      'Mysterious',
      'Psychic',
      'Charming',
      'Emotional',
      'Sensitive'
    ]
  })
});
//cancer route
ROUTER.get('/cancer', (req, res) => {
  res.render('cancer');
});
//scorpio route
ROUTER.get('/scorpio', (req, res) => {
  res.render('scorpio');
});

//pisces route
ROUTER.get('/pisces', (req, res) => {
  res.render('pisces');
});

module.exports = ROUTER;