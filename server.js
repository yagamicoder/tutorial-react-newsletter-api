var restify = require('restify');
var server = restify.createServer();
var corsMiddleware = require('restify-cors-middleware');

function respond(req, res, next) {
  const email = req.body.email;
  const respObj = {
    'message': `Subscribed using ${email}`
  };
  res.send(respObj);
  next();
}

var cors = corsMiddleware({
  origins: ['http://localhost:3000']
});
server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

server.post('/subscribe', respond);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});