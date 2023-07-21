import mongoose from 'mongoose';

const artistsSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  genres: [String],
});

const artist = mongoose.model('Artist', artistsSchema);

export default artist;
