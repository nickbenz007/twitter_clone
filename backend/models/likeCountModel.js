import mongoose from 'mongoose';

const likeCountsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tweets: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweets',
  },
});

const LikeCount = mongoose.model('Tweets', likeCountsSchema);

export default LikeCount;
