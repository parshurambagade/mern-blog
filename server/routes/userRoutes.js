import express from 'express';
import { getAllUsers, getUser } from '../controllers/user.controllers.js';

const router = express.Router();


// User Routes (protected)

router.get('/all-users', getAllUsers);
router.get('/:id', getUser);

export default router;
