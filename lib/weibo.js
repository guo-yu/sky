/**
 *
 * @brief : 定义了微博相关的操作，如转发，获取好友等等
 *
 **/

var request = require('request'),
	api = require('./api');

// params.key
// params.secret
exports.token = function(params, cb) {
	api('POST', 'https://api.weibo.com/oauth2/access_token?client_id=' + params.key + '&client_secret=' + params.secret + '&grant_type=authorization_code&redirect_uri=' + weibo.redirect + '&code=' + weibo.code, function(data) {
		if (typeof(data.error) == 'undefined') {
			cb({
				uid: data.uid,
				token: data.access_token
			});
		} else {
			console.log(data.error)
		}
	});
}

// params.uid
// params.token
// 获取用户信息
exports.user = function(params, cb) {
	// 如果是新用户，获取用户信息
	api('GET', 'https://api.weibo.com/2/users/show.json?access_token=' + params.token + '&uid=' + params.uid, function(info) {
		if (typeof(info.error) == 'undefined') {
			callback(info);
		} else {
			console.log(info.error)
		}
	});
}

// 发送一条新信息
exports.pub = function(params, cb) {
	request.post({
		url: 'https://api.weibo.com/2/statuses/update.json?access_token=' + params.token,
		form: {
			status: params.content
		}
	}, function(e, r, body) {
		if (!e) {
			cb(body);
		} else {
			console.log(e);
		}
	});
}

// 关注某个用户
exports.fo = function(params, cb) {
	request.post({
		url: 'https://api.weibo.com/2/friendships/create.json?access_token=' + params.token + '&uid=' + params.uid
	}, function(e, r, body) {
		if (!e) {
			cb(body);
		} else {
			console.log(e);
		}
	});
}

// 转发某条信息
// params.content: 转发内容
// params.wbid: 需要转发的那条微博的id
exports.forward = function(params, cb) {
	request.post({
		url: 'https://api.weibo.com/2/statuses/update.json?access_token=' + params.token + '&id=' + params.wbid,
		form: {
			status: params.content
		}
	}, function(e, r, body) {
		if (!e) {
			cb(body);
		} else {
			console.log(e);
		}
	});
}

// 获取好友信息
// params.token
// params.uid
// params.count 数量
exports.fans = function(params, cb) {
	api('GET', 'https://api.weibo.com/2/friendships/friends.json?access_token=' + params.token + '&uid=' + params.uid + '&count=' + params.count, function(fan) {
		if (!fan.error) {
			cb(fan)
		} else {
			console.log(fan.error)
		}
	})
}

// 获取某条用户的微博
exports.fetch = function(params, cb) {
	api('GET','https://api.weibo.com/2/statuses/user_timeline.json?access_token=' + params.token + '&uid=' + params.uid + '&count' + params.count + '&page=' + params.page + '&feature=' + params.feature + '&trim_user=' + params.trim_user,function(wb){
		if (!wb.error) {
			cb(wb)
		} else {
			console.log(wb.error)
		}
	});
}