
/*
 * GET home page.
 */

var sky = require('../ctrlers/sky');

module.exports = function(req, res){
  sky.fetch({
    count: req.query.count,
    page: req.query.page
  },function(skyes){
    res.json({
        stat: 'ok',
        skyes: skyes
    })
  })
};