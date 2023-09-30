import expressAsyncHandler from 'express-async-handler';
import Tweet from '../models/tweetsModel.js';
import LikeCount from '../models/likeCountModel.js';

const tweets = expressAsyncHandler(async (req, res) => {
  const myTweets = await Tweet.find({ id: req.user._id });
  res.status(200).json({ myTweets });
});

const postTweet = expressAsyncHandler(async (req, res) => {
  const { message, likeCounts } = req.body;
  const tweet = await Tweet.create({
    message,
    likeCounts,
    id: req.user._id,
  });
  res.send(tweet);
  await tweet.save();
});

const deleteTweet = expressAsyncHandler(async (req, res) => {
  // try {
  //   const tweetId = req.params.id;
  //   const tweet = await Tweet.findById(tweetId);
  //   if (!tweet) {
  //     return res.status(404).json({ message: 'Tweet not found' });
  //   }
  //   if (tweet.user.toString() !== req.user._id.toString()) {
  //     return res
  //       .status(403)
  //       .json({ message: 'You are not authorized to delete this tweet' });
  //   }
  //   await tweet.remove();
  //   res.json({ message: 'Tweet deleted successfully' });
  // } catch (err) {
  //   res.status(500).json({ message: 'Error deleting tweet', error: err });
  // }
  // res.send('delete tweets');
});

export { tweets, postTweet, deleteTweet };
