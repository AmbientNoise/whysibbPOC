
var express = require('express');

function home(req, res) {
  res.render("site/home");
}



function setup(app) {
  app.use(express.static(__dirname + "./wwwroot"));

  app.get('/', home);
}

module.exports = setup;
