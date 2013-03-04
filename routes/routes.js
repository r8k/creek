module.exports = function (log) {
    app.get('/', ensureAuthenticated, creek.home);
    app.get('/item/:uid', ensureAuthenticated, creek.create);
    app.get('/items', ensureAuthenticated, creek.create);
    app.post('/item', ensureAuthenticated, creek.create);
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/items',
        failureRedirect: '/' }));

    app.get('*', function (req, res) {
        res.redirect('/');
    });

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.render('login.ejs');
        };
    }
}