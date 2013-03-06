// # routes.js
// routes.js defines all our available routes and what we do with them.
app.get('/', ensureAuthenticated, creek.home);
app.get('/item/:id', ensureAuthenticated, creek.fetch);
app.get('/allitems', ensureAuthenticated, creek.fetchall);
app.get('/items', ensureAuthenticated, creek.create);
app.post('/item', ensureAuthenticated, creek.create);

// And as said earlier, we do use passport for authentication,
// and use the LocalStrategy to work for us.
app.post('/login', passport.authenticate('local', {
    successRedirect: '/items',
    failureRedirect: '/'
}));

// For all unnecessary routes, re-route them to our index page.
app.get('*', function (req, res) {
    res.redirect('/');
});