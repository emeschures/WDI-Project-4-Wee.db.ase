const
	express = require('express'),
	Weed = require('../models/Weed.js'),
	{ verifyToken } = require('../serverAuth.js')

module.exports = {

	index: (req, res) => {
		Weed.find({}).populate("comments.user").exec((err, weeds) => {
			res.json(weeds)
		})
	},

	show: (req, res) => {
		Weed.findById(req.params.id).populate("comments.user").exec((err, weed) => {
			res.json(weed)
		})
	},

	create: (req, res) => {
		Weed.create({...req.body, user: req.user}, (err, weed) => {
			if(err) return console.log(err)
			res.json({success: true, message: "Weed created.", weed})
		})
	},

	createPost: (req, res) => {
		Weed.findById(req.params.id).populate("comments.user").exec((err, weed) => {
			console.log(req.body,"#########")
			weed.comments.push({...req.body, user: req.user})
			console.log(weed)
			weed.save((err) => {
				res.json(weed)
			})
		})
	},

	update: (req, res) => {
		Weed.findById(req.params.id).populate("comments.user").exec((err, weed) => {
			Object.assign(weed, req.body)
			weed.save((err, updatedWeed) => {
				res.json({success: true, message: "Weed updated.", weed})
			})
		})
	},

	destroy: (req, res) => {
		Weed.findByIdAndRemove(req.params.id, (err, weed) => {
			res.json({success: true, message: "Weed deleted.", weed})
		})
	},
}