
/*
 * GET home page.
 */

var config = require('../config')();

module.exports = function(req, res){
  res.render('index', {
    user: req.session.user,
    weibo: config.weibo
  });
};