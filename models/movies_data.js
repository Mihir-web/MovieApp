// models/movies_data.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema for movies
var MovieSchema = new Schema({
   Movie_ID: { type: Number, required: true, unique: true },
    Title: { type: String, required: true },
    Year: { type: Number, required: true },
    Rated: { type: String },
    Released: { type: String },
    Runtime: { type: String },
    Genre: { type: String },
    Director: { type: String },
    Writer: { type: String },
    Actors: { type: String },
    Plot: { type: String },
    Language: { type: String },
    Country: { type: String },
    Awards: { type: String },
    Poster: { type: String },
    'Ratings.Source': { type: String },
    'Ratings.Value': { type: String },
    Metascore: { type: Number },
    imdbRating: { type: Number },
    imdbVotes: { type: String },
    imdbID: { type: String },
    Type: { type: String },
    tomatoMeter: { type: String },
    tomatoImage: { type: String },
    tomatoRating: { type: String },
    tomatoReviews: { type: String },
    tomatoFresh: { type: String },
    tomatoRotten: { type: String },
    tomatoConsensus: { type: String },
    tomatoUserMeter: { type: String },
    tomatoUserRating: { type: String },
    tomatoUserReviews: { type: String },
    tomatoURL: { type: String },
    DVD: { type: String },
    BoxOffice: { type: String },
    Production: { type: String },
    Website: { type: String },
    Response: { type: String }
});

// Export the model
module.exports = mongoose.model('movies_data', MovieSchema, 'movies_data');
