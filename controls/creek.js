HEADER = {
    'Content-Type': 'text/javascript'
};

/**
 * Login
 */

exports.home = function (req, res) {
    res.render('index.ejs');
};

/**
 * GET all items.
 */

exports.fetch = function (req, res) {
    res.send(items);
};

/**
 * POST a new item.
 */
exports.create = function (req, res) {
    res.send(JSON.stringify({
      status: 'success',
    }), HEADER, 200);
};