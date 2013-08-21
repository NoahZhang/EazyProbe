exports.getJSONTemplate = function(props){
  var property = "";
  var result = "{";
  
  for(var i = 0; i < props.length; i++){
    property = props[i];

    result += '"' + property + '":"{' + i + '}"';

    if(i != props.length - 1){
      result += ",";
    } 
  }

  result += "}";
  return result;
}

exports.dataToJSON = function(template, data){
  var results = [];

  for(var i = 0; i < data.length; i++){
    var line = data[i];

    if(line.trim().length == 0){
      continue;
    }

    var props = line.split('|');

    line = template;
    for(var j = 0; j < props.length; j++){
      var reg ='{' + j + '}';
      line = line.replace(reg, props[j]);
    }

    var obj = JSON.parse(line);
    results.push(obj);
  }

  return results;
}
