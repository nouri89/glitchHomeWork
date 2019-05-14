//Load the 'express' library which makes it easier 
//to handle HTTP conversations:
const express = require("express");

const app = express();

//Register some handlers for different routes.
//Read about routing here:
//http://expressjs.com/en/starter/basic-routing.html
//You can add more routes.

app.get("/", function (request, response) {
    response.send("Hello CYF");
});

app.get("/two", function (request, response) {
    response.send("Another route");
});

app.get("/numbers", function(request, response) {
  response.json([1, 2, 3]);
});

//Tell the server to start listening for requests.
//This will prevent the program from exiting.
//It will keep running, and when a matching request 
//comes in, it will call the handlers we registered above.
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
