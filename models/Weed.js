import { mongo } from 'mongoose';

const
    mongoose = require('mongoose'),
    weedSchema = new mongoose.Schema({
        name: String,
        type: String,
        weight: Number,
        cost: Number,
        date: Date

    })

    const Weed = mongoose.model('Weed', weedSchema)

    module.exports = Weed