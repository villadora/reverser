var proxy = require('http-proxy');
var routington = require('routington');

module.exports = Reverser;

function Reverser(options) {
  if (!(this instanceof Reverser)) {
    return new Reverser(options);
  }

  this.router = routington();
  this.proxy = httpProxy.createProxyServer(options);
}


Reverser.prototype.register = function(path, host) {
  var nodes = this.router.define(path);
  (nodes || []).forEach(function(node) {
    node.host = host;
  });
};


Reverser.prototype.serve = function(req, res, next) {
  var match = router.match(url.parse(req.url).pathname);

  if (!match)
    return next();

  var node = match.node;
  this.proxy.web(req, res, {
    target: node.host
  }, function(err) {
    next(err);
  });
};
