import mongoose from 'mongoose';

const songsSchema = new mongoose.Schema({
  title: String,
  artists: [String],
  album: String,
});

const song = mongoose.model('Song', songsSchema);

export default song;
