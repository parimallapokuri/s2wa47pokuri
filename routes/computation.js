var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }
  let log = Math.log2(x) 
  let cosh =Math.cosh(x)
  let floor = Math.floor(x)
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + log ,
    v1: `applied to ` + x + ` is ` + cosh,
    v2: `applied to ` + x + ` is ` + floor
  });
});

module.exports = router;