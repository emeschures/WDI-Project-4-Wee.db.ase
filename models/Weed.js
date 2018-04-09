import { mongo } from 'mongoose';

const
    mongoose = require('mongoose'),
    weedSchema = new mongoose.Schema({
        name: String,
        strain: String,
        weight: String,
        cost: String,
        date: Date,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    })

    const Weed = mongoose.model('Weed', weedSchema)

    module.exports = Weed