import express from 'express';
import { deletePost, editPost, getPost, publishPost, getAllPosts } from '../controllers/post.controllers.js';
import multer from 'multer';
import { isAuthenticated } from '../middelwares/authMiddleWare.js';

const router = express.Router();

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });


// Post Routes (protected)
router.post('/publish', upload.single("thumbnail"), isAuthenticated, publishPost);
router.delete('/post/:id', isAuthenticated, deletePost);
router.put('/post/:id', isAuthenticated, editPost);
router.get('/post/:id', isAuthenticated, getPost);
router.get('/posts',isAuthenticated, getAllPosts);

export default router;
