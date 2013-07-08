var weibo = require('../lib/weibo');
var config = require('../config')();

// signin
exports.signin = function(req,res,next) {
    if (!req.session.user) {
        weibo.token({
            key: config.weibo.key,
            secret: config.weibo.secret,
            redirect: config.weibo.redirect,
            code: req.query.code
        },function(data){
            console.log(data);
            req.session.user = data;
            res.redirect('/')
        })
    }
}

// signout
exports.signout = function(req,res,next) {
    if (req.session.user) {
        delete req.session.user;
    } else {
        res.redirect('/')
    }
} 