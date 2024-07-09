// signup endpoint

import app from './app';

app.post('/api/register', async (req, res) => {
    try {
      const {email, fullNames, password} = req.body;
  
      // Check if the username already exists
      const existingUser = await User.findOne({ fullNames, email });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create a new user
      const newUser = new User({
        fullNames,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      // Generate a JWT token
      const token = jwt.sign({ userId: newUser._id }, 'secret-key', {
        expiresIn: '1h',
      });
  
      res.json({ token });
    } catch (error) {
      console.error('Error in signup:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  