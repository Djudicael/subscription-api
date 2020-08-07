import app from'./src/app.mjs';
import http from 'http';
//TODO: create .env
const port = process.env.PORT || 3001;


const server = http.createServer(app);

server.listen(port, function () {
    console.log('Express server listening on port ' + port);
});