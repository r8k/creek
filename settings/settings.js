// # settings.js
// settings.js is used for the express related app settings.
var oneYear = 31557600000;
express.logger.format('expresslog', utils.expresslog);
app.use(connect.compress());
app.use(express.bodyParser());
app.use(express.errorHandler());
app.use(express.logger('expresslog'));

// We have everything related to express setting loaded here, from
// cache settings, to logger format, connect middleware settings,
// passport settings, cookieParser related ones, errorHandlers,
// view rendering engines, public root path, session secrets etc and so on.
app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/../views');
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.session({
	store: sessionStore,
    secret: 'cr33k',
    cookie: {maxAge: 900000}
}));
app.use(express.static(__dirname + '/../public'))
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.set('PORT', process.env.PORT || 3000);