const
    mongoose = require('mongoose'),
    commentSchema = new mongoose.Schema({
        body: String,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    })
    weedSchema = new mongoose.Schema({
        name: String,
        weedType: String,
        description: String,
        comments: [commentSchema]
    })

    const Weed = mongoose.model('Weed', weedSchema)

    module.exports = Weed