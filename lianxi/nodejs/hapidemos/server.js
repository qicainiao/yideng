const Hapi = require('hapi');


//Create a hapi server
var server = new Hapi.Server();

/**************server config********/
let connectionOptions={
    port: 3333,
    host: 'localhost'
};
server.connection(connectionOptions);

// Export the server to be required elsewhere.
module.exports = server;
