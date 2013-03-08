exports.expresslog = expresslog = function(tokens, req, res){
  var status = res.statusCode
  , len = parseInt(res.getHeader('Content-Length'), 10)
  , color = 32;

  if (status >= 500) color = 31
    else if (status >= 400) color = 33
      else if (status >= 300) color = 36;

    len = isNaN(len)
    ? ''
    : len = ' - ' + bytes(len);
	
	req.method = req.method === ('GET' || 'PUT')
	? req.method + ' :'
	: req.method + ':';
	
	logDate = '[' + (new Date()).toLocaleString().slice(0,24) + '] ';

    return logDate + '\033[90m' + req.method
    + ' ' + '\033[' + color + 'm' + res.statusCode
    + ' \033[90m'
    + (new Date - req._startTime)
    + 'ms' + ' ' + req.originalUrl
    + len
    + '\033[0m';
  };