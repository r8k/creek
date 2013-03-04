var oneYear = 31557600000;

module.exports = function () {
    express.logger.format('customLog', utils.customLog);
    app.use(connect.compress());
    app.use(express.bodyParser());
    app.use(express.errorHandler());
    app.use(express.logger('customLog'));
    app.engine('html', ejs.renderFile);
    app.set('views', __dirname + '/../views');
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'cr33k' }));
    app.use(express.static(__dirname + '/../public'))
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.set('PORT', process.env.PORT || 3000);
}