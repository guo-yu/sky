//          __        
//    _____/ /____  __
//   / ___/ //_/ / / /
//  (__  ) ,< / /_/ / 
// /____/_/|_|\__, /  
//           /____/   
// 
// the sky dv of beijing

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('sky'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var sky = require('./ctrlers/sky');
sky.fetch()

app.get('/', require('./routes/index'));
app.get('/signin', require('./routes/sign').signin);
app.get('/signout', require('./routes/sign').signout);

app.get('/api/sky',require('./routes/checker') ,require('./routes/sky'));

http.createServer(app).listen(app.get('port'));
