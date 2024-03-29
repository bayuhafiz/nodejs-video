var server = require('./server'),
    handlers = require('./handlers'),
    router = require('./router'),
    handle = { };

handle["/"] = handlers.home;
handle["/home"] = handlers.home;
handle["/upload"] = handlers.upload;
handle._static = handlers.serveStatic;

process.on('uncaughtException', function(err) {
    console.log(err);
});

server.start(router.route, handle);
