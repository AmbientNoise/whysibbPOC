//#!/usr/bin/env node
var config = require("./config");
var express = require("express");
var app = express();

//Use whichever logging system you prefer.
//Doesn't have to be winston, I just wanted something more or less realistic
var log = require("winston").loggers.get("app:server");

app.set("views", __dirname);
//use whatever templating system(s) you like
app.set("view engine", "jade");

//set the static middleware so that we can get at our static files
app.use(express.static(__dirname + "/public"));

//See the README about ordering of middleware
//Load the routes ("controllers" -ish)
[
  "./users/routes",
  "./site/routes"
].forEach(function (routePath) {
    require(routePath)(app);
});

//FINALLY, use any error handlers
app.use(require("./middleware").notFound);

//Prettify the HTML for dev purposes
app.locals.pretty = true;

//Note that there's not much logic in this file.
//The server should be mostly "glue" code to set things up and
//then start listening


app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error("Unable to listen for connections", error);
    process.exit(10);
  }
  log.info("express is listening on http://" +
    config.express.ip + ":" + config.express.port);
});
