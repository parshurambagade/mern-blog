import express from 'express';
import { deletePost, editPost, getPost, publishPost } from '../controllers/post.controllers.js';

const router = express.Router();

// Post Routes
router.post('/publish', publishPost);
router.delete('/post/:id', deletePost);
router.put('/post/:id', editPost);
router.get('/post/:id', getPost);

export default router;
