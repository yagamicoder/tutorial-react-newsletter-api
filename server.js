var restify = require('restify');
var server = restify.createServer();

function respond(req, res, next) {
  const email = req.params.email;
  const respObj = {
    'message': `Subscribed using ${email}`
  }
  res.send(200, respObj);
  next();
}

server.use(restify.plugins.bodyParser());
server.post('/subscribe', respond);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});