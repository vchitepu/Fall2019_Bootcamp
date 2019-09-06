var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;


var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  if(parsedUrl.pathname == '/listings' && request.method === 'GET') {
    response.write(listingData);
    response.end();
  }
  else {
    response.statusCode = 404;
    response.write('Bad gateway error');
    response.end();
  }
};

server = http.createServer(requestHandler);

fs.readFile('listings.json', 'utf8', function(err, data) {

  if(err){
    throw err;
  } 
  else{
    listingData = data;
  }

});

server.listen(port, function() {
  console.log('Server listening on: http://localhost:' + port);
}) 