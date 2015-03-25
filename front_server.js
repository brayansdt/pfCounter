var connect = require('connect'),
    serveStatic = require('serve-static'),
    config = {
        port: 8009
    };

connect().use(serveStatic(__dirname)).listen(config.port, function(){
    console.log("Rodando na porta: "+config.port);
});