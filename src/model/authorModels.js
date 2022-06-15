let mongoose = require('mongoose');

let authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: "First name is required", // true
        trim: true
    },

    lname: {
        type: String,
        required: "Last name is required",
        trim: true
    },

    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: "Title is required"
    },

    email: {
        type: String,
        required: "Email is required",
        unique: true,
        trim: true,
        lowercase: true,      
    },

    password: {
        type: String,
        required: 'Password is required',
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Author", authorSchema); //authors