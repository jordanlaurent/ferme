const mongoose = require('mongoose');


const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    website: { type: String, required: false },
    type:{type:[String]},
    imageUrl: { type: String, required: false , default: "http://localhost:3000/images/random-annonce.png" },
    adresse: { type: String, required: true },
    region: { type: String, required: false },
    likes: { type: Number, required: false, default: 0 },
    dislikes: { type: Number, required: false, default: 0 },
    usersLiked: { type: [String], required: false },
    usersDisliked: { type: [String], required: false },
});

module.exports = mongoose.model('Sauce', sauceSchema)