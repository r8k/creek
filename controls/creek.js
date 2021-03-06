// # creek.js
// creek.js has the core functionality of creek.
// This is invoked from the route.js for the appropriate methods to be called in.
HEADER = {
    'Content-Type': 'text/javascript'
};

var client = new usergrid.client(usergridClientOptions);

/**
 * {
        process: results,
        version: pkg.version
    }
 */

var results = {
            "type": "user",
            "username": "joe",
            "getOnExist": true,
            "uuid": "8393342d-857b-11e2-bb35-02e81ae640dc",
            "created": 1362477630947,
            "modified": 1362657841445,
            "apps": ["app1", "app2", "app3"]
        };

/**
 * GET / index
 */
// exports.home = function (req, res) {
//     res.render('index.ejs', {
//         process: results
//       });
// };
exports.home = function (req, res) {
    res.render('index.ejs');
};

exports.getdata = function (req, res) {
    res.json({
        process: results
    });
};

/**
 * GET /item/:uid
 */
var fetchOptions = {
    type: 'users'
};
exports.fetch = function (req, res) {
    fetchOptions.username = req.params.id;
    client.getEntity(fetchOptions, function (err, existingUser) {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify({
                status: 'success',
                user: existingUser
            }), HEADER, 200);
        };
    });
};

/**
 * GET /allitems
 */
var fetchallOptions = {
    type: 'users',
    qs: {
        ql: 'select *'
    }
};
exports.fetchall = function (req, res) {
    client.createCollection(fetchallOptions, function (err, existingUsers) {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify({
                status: 'success',
                users: existingUsers
            }), HEADER, 200);
        };
    });
};

/**
 * POST /item
 */
var createOptions = {
    type: 'users',
    username: 'joe',
    getOnExist: true
};
exports.create = function (req, res) {
    client.createEntity(createOptions, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify({
                status: 'success',
                user: user
            }), HEADER, 200);
        };
    });
};