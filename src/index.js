var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Hellotest',(req, res)=> {
  res.send("HELLOWORLD_TEST");
});

module.exports = router;
