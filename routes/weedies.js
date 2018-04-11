const
	express = require('express'),
	weediesRouter = new express.Router(),
	weediesCtrl = require('../controllers/weedies.js'),
	verifyToken = require('../serverAuth.js').verifyToken

weediesRouter.route('/')
	.get(weediesCtrl.index)
	.post(weediesCtrl.create)

weediesRouter.route('/:id')
	.get(weediesCtrl.show)
	.patch(weediesCtrl.update)
	.delete(weediesCtrl.destroy)
	
weediesRouter.use(verifyToken)
// a protected api route for posting a comment... here...
	


module.exports = weediesRouter