var users = [{
    id: 1,
    username: 'joe',
    password: 'secret',
    email: 'joe@console.com'
}, {
    id: 2,
    username: 'bob',
    password: 'birthday',
    email: 'bob@console.com'
}];

function findById(id, fn) {
    var idx = id - 1;
    if (users[idx]) {
        fn(null, users[idx]);
    } else {
        fn(new Error('User ' + id + ' does not exist'));
    }
};

function findByUsername(username, fn) {
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.username === username) {
            return fn(null, user);
        }
    }
    return fn(null, null);
};

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(

function (username, password, done) {
    process.nextTick(function () {
        findByUsername(username, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user ' + username
                });
            }
            if (user.password != password) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
            return done(null, user);
        })
    });
}));

exports.ensureAuthenticated = ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.render('login.ejs');
    };
}