const
	express = require('express'),
	weediesRouter = new express.Router(),
	weediesCtrl = require('../controllers/weedies.js'),
	verifyToken = require('../serverAuth.js').verifyToken

weediesRouter.route('/')
	.get(weediesCtrl.index)
	.post(weediesCtrl.create)

weediesRouter.use(verifyToken)
weediesRouter.route('/:id')
	.get(weediesCtrl.show)
	.patch(weediesCtrl.update)
	.delete(weediesCtrl.destroy)

module.exports = weediesRouter