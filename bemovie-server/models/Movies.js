const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteMovieSchema = mongoose.Schema({
    id: {
        type: String,
    },
    Title: {
        type: String
    },
    Poster: {
        type: String
    } 
}, { timestamps: true })


const Movies = mongoose.model('Movies', favoriteMovieSchema);

module.exports = { Movies }
