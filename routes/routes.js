app.get('/', ensureAuthenticated, creek.home);
app.get('/item/:uid', ensureAuthenticated, creek.fetch);
app.get('/allitems', ensureAuthenticated, creek.fetchall);
app.get('/items', ensureAuthenticated, creek.create);
app.post('/item', ensureAuthenticated, creek.create);
app.post('/login', passport.authenticate('local', {
    successRedirect: '/items',
    failureRedirect: '/'
}));

app.get('*', function (req, res) {
    res.redirect('/');
});