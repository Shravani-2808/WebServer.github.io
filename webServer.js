const http = require('http')
const fs = require('fs')

http.createServer(function(req, res)
{
  res.writeHead(200, {'Content-Type' : 'text/html'})
  fs.readFile('webServer.html', function(error, data)
  {
    if(error)
    {
      res.writeHead(404)
      res.write('Something went wrong. Error:404-File not found')
    }
    else
    {
      res.write(data)
    }
    res.end()
  })
}).listen(8080);

