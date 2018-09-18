const Hapi = require('hapi');
const server = new Hapi.server({
  host:'localhost',
  port:3000
});

server.route({
  method:'GET',
  path:'/hello',
  handler:(request,h)=> {
    retrun "hello"
  }
});

async function start(){
  try {
    await server.start(function(){
      console.log('Server running at: ', server.info.uri);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();
