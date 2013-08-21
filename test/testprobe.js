var axon = require('axon')
  , req = axon.socket('req')
  , obj
  , info;

req.format('json');

req.bind(9298);

req.send('process', function(res){
  console.log(res);
});

req.send('os', function(res){
  console.log(res);
});
