module.exports = function(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        res.json({
            stat: 'fail',
            msg: 'not-login'
        });
    }
}