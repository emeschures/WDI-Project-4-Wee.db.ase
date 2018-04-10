const
	express = require('express'),
	Weed = require('../models/Weed.js'),
	{ verifyToken } = require('../serverAuth,js')


module.exports = {
	// list all
	index: (req, res) => {
		Weed.find({}, (err, weed) => {
			res.json(weed)
		})
	},

	// get one
	show: (req, res) => {
		
		Weed.findById(req.params.id, (err, weed) => {
			res.json(weed)
		})
	},

	// create a new user
	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err) return res.json({success: false, code: err.code})
			// once user is created, generate a token to "log in":
			const token = signToken(user)
			res.json({success: true, message: "User created. Token attached.", token})
		})
	},

	// update an existing user
	update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				res.json({success: true, message: "User updated.", user})
			})
		})
	},

	// delete an existing user
	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "User deleted.", user})
		})
	},
}