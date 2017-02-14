const utils = require('./utils');

const router = {};

router.fileRouter = (req, res) => {

	let filename = req.url.slice(5);
	filename = filename.length ? filename : '/';
	console.log('subUrl is', filename);

	if (req.method === 'GET') {

		utils.sendFile(req, res, filename);

	} else {
		utils.notAllowed(req, res);
	}
};


module.exports = router;