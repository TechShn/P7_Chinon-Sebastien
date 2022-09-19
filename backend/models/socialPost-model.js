const mongoose = require('mongoose')

const socialPostSchema = mongoose.Schema({
    userId: {type: String},
    textPost: {type: String, require: true},
    name: {type: String},
    date: {type: String},
    isAdmin: {type: Boolean},
    like: {type: Number, default: 0},
    userLiked: [{type: String}]
})

module.exports = mongoose.model('SocialPost', socialPostSchema);