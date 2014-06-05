var reverser = require('../index');

describe('router', function() {
  it('add router', function() {
    var proxy = reverser();
    proxy.register('/page/:id(\\w{3,30})', 'hostname.com');

    proxy.register('/page|post', 'host1.com');
    proxy.register('/page|post', 'host2.com');

    var match = proxy.router.match('/page');
    assert(match && match.node && match.node.host == 'host2.com');

  });
});