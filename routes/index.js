var express = require('express');
var router = express.Router()
const multer = require('multer');
const upload = require("./multer")

router.get('/', function(req,res){
  res.render('index')
})

router.post("/upload", function(req,res){
  res.send("Today Task Is Completed Sucessfully!")
})


module.exports = router
