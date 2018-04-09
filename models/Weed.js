import { mongo } from 'mongoose';

const
    mongoose = require('mongoose'),
    weedSchema = new mongoose.Schema({
        name: String,
        imageUrl: String,
        details: String

    })

    const Weed = mongoose.model('Weed', weedSchema)

    module.exports = Weed