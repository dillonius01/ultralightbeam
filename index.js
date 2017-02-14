const http = require('http');
const routes = require('./routes');
const utils = require('./utils');

const PORT = process.env.PORT || 8080;


const server = http.createServer((req, res) => {
	console.log(`INCOMING! ${req.method} ${req.url}`);

	if (req.url.match(/^\/file.*/)) {
		routes.fileRouter(req, res);
	} else {
		utils.notFound(req, res);
	}
});

server.listen(PORT, () => {
	console.log(`Compromising your privacy on port ${PORT}`);
});
