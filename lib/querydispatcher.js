var OSInfo = require('./osinfo.js')
  , ProcessInfo = require('./processinfo.js');

exports.queryDispatcher = function(task, reply){
  var opration;

  opration = task;

  switch(opration){
    case 'os':
      obj = new OSInfo();
      info = obj.getOSInfo();

      reply(info);

      break;
    case 'process':
      obj = new ProcessInfo();
      obj.getProcessInfo(function(err, data){
        if(err != null){
          reply(err);
          return;
        }

        reply(data);
      });

      break;
  }
};
