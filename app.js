// # App.js
// App.js is the central place for us to have all the required
// pieces together. Here we instantiate every required module.
// We certainly need express, and that is the one we start with.
// And, oh yes! we do use [passport](http://passportjs.org) for authentication.

// The Mobile App Services is being managed with [Apigee Usergrid](https://apigee.com/usergrid/).
// Now, this is our core feature. We do store all the data related to a user's apps with
// Apigee Usergrid. And, yes, we do care a lot about the User's privacy.
// All the data that is stored about the User's apps, can only be visible to the
// User's friends (if the User permitted them to be available to his friends.)

// ### NPM modules
// So, as you can see, these are the modules that we get from NPM.

express = require("express");
connect = require("connect");
bytes = require('bytes');
ejs = require('ejs');
passport = require('passport');
usergrid = require('usergrid');
sessionStore = new express.session.MemoryStore;
LocalStrategy = require('passport-local').Strategy;

// ### Local modules
// And, these modules are our core libs, which provide the functionality
// to [creek](http://creek.io/).

utils = require("./utils/utils");
log = require("./utils/logger");
config = require('./config/config');
creek = require('./controls/creek');
require('./controls/passport');

// ### Server instantiation
// Here is our app server getting instantiated.
// And do note about the logger.

app = express();
this.log = new log.Logger();

require('./settings/settings');
require('./routes/routes');

// ### creek getting started
// Finally, here comes our creek starting on the
// port that is set in the app settings.
server = app.listen(app.settings.PORT);
this.log.info('Server started at PORT: ' + app.settings.PORT);