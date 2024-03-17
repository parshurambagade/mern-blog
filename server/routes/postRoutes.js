import express from 'express';
import { deletePost,  viewPost, publishPost, viewAllPosts,viewMyPosts, updatePost } from '../controllers/post.controllers.js';
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
router.delete('/delete/:id', isAuthenticated, deletePost);
router.put('/update/:id', isAuthenticated, updatePost);
router.get('/my-posts',isAuthenticated, viewMyPosts);
router.get('/view/:id', viewPost);
router.get('/all-posts', viewAllPosts);

export default router;
