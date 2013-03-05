express = require("express");
connect = require("connect");
bytes = require('bytes');
ejs = require('ejs');
passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

utils = require("./utils/utils");
log = require("./utils/logger");
config = require('./config/config');
creek = require('./controls/creek');
require('./controls/passport')

app = express();
this.log = new log.Logger();

require('./settings/settings');
require('./routes/routes');
require('./controls/passport');

server = app.listen(app.settings.PORT);
this.log.info('Server started at PORT: ' + app.settings.PORT);