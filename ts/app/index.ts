// Primary file for the API

// Dependencies
import http from 'http';
import url from 'url';

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  // Get the URL and parse id
  let parsedUrl: url.UrlWithParsedQuery;
  let path: string;
  let trimmedPath = '';
  if (req.url) {
    parsedUrl = url.parse(req.url, true);
    // Get the path
    if (parsedUrl.pathname) {
      path = parsedUrl.pathname;
      trimmedPath = path.replace(/^\/+|\/+$/g, '');
    }
  }

  // Send the response
  res.end('hello resonse');

  // Log the request
  console.log('Request received on path:', trimmedPath);
});
// Start the server, and have it listening on port 3000

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
