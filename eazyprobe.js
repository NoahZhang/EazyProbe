var axon = require('axon')
  , rep = axon.socket('rep')
  , dispatcher = require('./lib/querydispatcher.js');

module.exports = EazyProbe;

function EazyProbe(){
  this.options = {
    host: '10.0.13.51',
    port: 9298
  };
}

EazyProbe.prototype.StartMonit = function(){
  var info
    , obj;

  rep.format('json');

  rep.connect(this.options.port, this.options.host);

  rep.on('message', function(task, reply){
    dispatcher.queryDispatcher(task, reply);
  });
}
