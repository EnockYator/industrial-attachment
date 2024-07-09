
// This file is for authentication routes

// importing modules
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import router from '.router';

// Register route
router.post('/register', async (req, res) => {
    // ...
  })
  
  // Login route
  router.post('/login', async (req, res) => {
    // ...
  })
  
  module.exports = router