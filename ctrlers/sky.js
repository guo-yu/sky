// sky
var weibo = require('../lib/weibo');
var config = require('../config')(),
    request = require('request'),
    cheerio = require('cheerio');

// 这里因为使用api是无法获取到微博数据的，所以采用spider抓取
// 没登录要做一个伪造登录的请求。
// 如何操作 request.cookie ???
exports.fetch = function(params, cb) {
    request('http://weibo.com/' + config.weibo.target, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            console.log(body);
        }
    });
}

exports.apifetch = function(params,cb) {
    // weibo.fetch({
    //     token: params.token,
    //     uid: config.weibo.target,
    //     count: params.count,
    //     page: params.page,
    //     trim_user: 1,
    //     feature: 2
    // },function(skyes){
    //     cb(skyes)
    // })
}