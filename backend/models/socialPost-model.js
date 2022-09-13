const mongoose = require('mongoose')

const socialPostSchema = mongoose.Schema({
    textPost: {type: String, require: true},
    name: {type: String}
})

module.exports = mongoose.model('SocialPost', socialPostSchema);