var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req)
    // res.render('student', { title: 'kcc no.1 clg' });
  res.json( "praveen rathi");
});

router.get('/signin', function(req, res, next) {
    console.log(req.query)
    res.render('student', { title: req.query.emailInt });
//   res.json(req.params.da );
});

router.get('/signin', function(req, res, next) {
    console.log(req.body)
    res.render('student', { title: req.body.emailInt });
//   res.json(req.params.da );
});

router.get('/:da', function(req, res, next) {
    console.log(req.params.da)
    // res.render('student', { title: 'kcc no.1 clg' });
  res.json(req.params.da );
});

module.exports = router;