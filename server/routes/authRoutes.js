import express from 'express';
import { login, logout, register } from '../controllers/auth.controllers.js';

const router = express.Router();

// User Routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);


export default router;
