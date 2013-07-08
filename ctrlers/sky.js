// sky
var weibo = require('../lib/weibo');
var config = require('../config');

exports.fetch = function(params,cb) {
    weibo.fetch({
        token: req.session.user.token,
        uid: config.weibo.target,
        count: params.count,
        page: params.page,
        trim_user: 1,
        feature: 2
    },function(skyes){
        cb(skyes)
    })
}