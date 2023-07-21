import mongoose from 'mongoose';

const popularsSchema = new mongoose.Schema({
  title: String,
  playCount: Number,
  periodOfTime: String,
});

const popular = mongoose.model('Popular', popularsSchema);

export default popular;
