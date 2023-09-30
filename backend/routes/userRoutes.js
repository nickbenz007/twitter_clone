import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controller/userController.js';
import {
  tweets,
  postTweet,
  deleteTweet,
} from '../controller/tweetsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.get('/tweets', protect, tweets);
router.post('/me/tweets', protect, postTweet);
router.delete('/me/tweets/:id', protect, deleteTweet);

export default router;
