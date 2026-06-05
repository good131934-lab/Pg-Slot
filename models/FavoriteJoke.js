const mongoose = require('mongoose');

const favoriteJokeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  jokeData: {
    type: String,
    required: true,
  },
  jokeType: {
    type: String,
    enum: ['single', 'twopart'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  savedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('FavoriteJoke', favoriteJokeSchema);
