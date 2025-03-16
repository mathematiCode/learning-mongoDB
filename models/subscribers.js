import express from 'express';
import Subscriber from '../models/subscribers.js';

const router = express.Router();

// Get all subscribers
router.get('/', async (req, res) => {
  res.send('Getting all subscribers');
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a subscriber by ID
router.get('/:id', (req, res) => {
  res.send('Hiya!');
});

// Create a new subscriber
router.post('/', async (req, res) => {
  res.send('Posting...');
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a subscriber by ID
router.patch('/:id', (req, res) => {
  res.send('Hello World');
});

// Delete a subscriber by ID
router.delete('/:id', (req, res) => {
  res.send('Hello World');
});
// Export the router
export default router;
