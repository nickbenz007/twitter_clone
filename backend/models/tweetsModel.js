import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    likeCounts: {
      type: Number,
      required: true,
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;
