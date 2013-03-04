express = require("express");
connect = require("connect");
bytes = require('bytes');
ejs = require('ejs');
utils = require("./utils/utils");
log = require("./utils/logger");
config = require('./config/config');
creek = require('./controls/creek');
passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

app = express();
this.log = new log.Logger();

require('./settings/appSettings')();
require('./routes/routes')(this.log);
require('./controls/passport')

server = app.listen(app.settings.PORT);
this.log.info('Server started at PORT: ' + app.settings.PORT);