const
    mongoose = require('mongoose'),
    commentSchema = new mongoose.Schema({
        body: String,
        user: String
    })
    weedSchema = new mongoose.Schema({
        name: String,
        weedType: String,
        description: String,
        comments: [commentSchema],
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    })

    const Weed = mongoose.model('Weed', weedSchema)

    module.exports = Weed