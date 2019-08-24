import Server from "ada-cloud-hub/boot";
import static from 'koa-static';

let server = new Server();
server.use(static(__dirname + './dist'));
server.on('started', () => {
});
server.startup();

export default server;