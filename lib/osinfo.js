var os = require('os');

module.exports = OSInfo;

function OSInfo(){

}

OSInfo.prototype.getOSInfo = function(){
  this.ostype = os.type();
  this.hostname = os.hostname();
  this.platform = os.platform();
  this.cpuarch = os.arch();
  this.osuptime = os.uptime();
  this.osloadavg = os.loadavg();
  this.totalmemory = os.totalmem();
  this.freememory = os.freemem();
  this.cpu = os.cpus();

  return this;
}
