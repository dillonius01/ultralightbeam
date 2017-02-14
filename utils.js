const fs = require('fs');
const path = require('path');

module.exports = {

	notFound: (req, res) => {
		res.setHeader('Content-Type', 'text/plain');
		res.statusCode = 404;
		res.end('Not Found!');
	},

	notAllowed: (req, res) => {
		res.setHeader('Content-Type', 'text/plain');
		res.statusCode = 403;
		res.end('Not Allowed!');
	},

	sendFile: (req, res, filename) => {
		const filePath = path.join(process.env.HOME, filename);
		const readableFileStream = fs.createReadStream(filePath);

		readableFileStream.on('data', chunk => {
			res.write(chunk);
		});

		readableFileStream.on('end', () => {
			console.log('All done, sending back now');
			res.statusCode = 200;
			res.end('mmkay');
		});
	}
};
