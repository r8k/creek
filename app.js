express = require("express");
app = express();
connect = require("connect");
bytes = require('bytes');
ejs = require('ejs');
utils = require("./utils/utils");
log = require("./utils/logger");
config = require('./config/config');
passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

require('./settings/appSettings')();
this.log = new log.Logger();

server = app.listen(app.settings.PORT);
require('./routes/routes')(this.log);