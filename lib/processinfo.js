module.exports = ProcessInfo;

function ProcessInfo(){
  this.props = ['USER', 'PID', 'CPU', 'MEM', 'VSZ', 'RSS', 'TTY', 'STAT', 'START', 'TIME', 'COMMAND'];
}

ProcessInfo.prototype.getProcessInfo = function(callback){
  var exec = require('child_process').exec
    , codec = require('./infocodec.js')
    , jsonTemplate
    , child;
    
  jsonTemplate = codec.getJSONTemplate(this.props)

  child = exec("ps axu | grep thin | awk '{sum = $1;for(i = 2; i <= NF; i++) {if (i <= 11) {sum = sum\"|\"$i;} else sum = sum\" \"$i;}; print sum;}'", function(error, stdout, stderr) {
     var lines = stdout.split(/\r?\n/);
     var procInfo;

     procInfo = codec.dataToJSON(jsonTemplate, lines);

     callback(error, procInfo);
  });
}
