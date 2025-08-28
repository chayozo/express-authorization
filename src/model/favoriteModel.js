const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
    byUser: { type: mongoose.Types.ObjectId, ref: 'user' },
    byProduct: {type: mongoose.Types.ObjectId, ref: 'product'},
    createdDate: {type: Date, default: Date.now}
})

const favoriteModel =  mongoose.model('favorite', favoriteSchema)
module.exports = favoriteModel