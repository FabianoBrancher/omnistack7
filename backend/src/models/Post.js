const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
        // timestamps gera as colunas created_at e updated_at no modelo do BD
        timestamps: true
    })

module.exports = mongoose.model('Post', PostSchema)