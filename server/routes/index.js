import express from 'express';
const router = express.Router();

// importing API routes
import authRoutes from './../api/auth';

// using the API routes
router.use('auth', authRoutes);

module.exports = router;
