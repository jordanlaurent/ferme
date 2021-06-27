const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    id: { type: Number, primaryKey: true,autoIncrement: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    isAdmin: { type: Boolean, defaultValue: false},
    picture: { type: String, default: "http://localhost:3000/images/random-user.png" },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);