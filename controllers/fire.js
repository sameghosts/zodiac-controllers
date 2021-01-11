const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//fire sign routes
ROUTER.get('/', (req, res) => {
  res.render('fire', {
    fireSigns: [
      'Aries (cardinal)', 
      'Leo (fixed)', 
      'Sagittarius (mutable)'
    ], 
    traits: [
      'Passionate', 
      'Strong Emotions', 
      'Tempermental', 
      'Energetic', 
      'Accomplished', 
      'Interesting'
    ]
    });
  }); 

//aries route
ROUTER.get('/aries', (req, res) => {
  res.render('aries');
});
//leo
ROUTER.get('/leo', (req, res) => {
  res.render('leo');
});

//sagittarius
ROUTER.get('/sagittarius', (req, res) => {
  res.render('sagittarius');
});

module.exports = ROUTER;