const express = require('express');
const axios = require('axios');
const router = express.Router();

// Get random joke
router.get('/random', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Joke API error:', error);
    res.status(500).json({ message: 'Failed to fetch joke' });
  }
});

// Get joke by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const validCategories = ['general', 'knock-knock', 'programming', 'misc'];
    
    if (!validCategories.includes(category)) {
      return res.status(400).json({ 
        message: 'Invalid category. Valid categories: ' + validCategories.join(', ') 
      });
    }

    const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Joke API error:', error);
    res.status(500).json({ message: 'Failed to fetch joke' });
  }
});

// Get multiple jokes
router.get('/multiple/:count', async (req, res) => {
  try {
    const { count } = req.params;
    const limit = Math.min(Math.max(1, parseInt(count)), 10); // Max 10 jokes

    const jokes = [];
    for (let i = 0; i < limit; i++) {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
      jokes.push(response.data);
    }

    res.status(200).json({ 
      count: jokes.length,
      jokes 
    });
  } catch (error) {
    console.error('Joke API error:', error);
    res.status(500).json({ message: 'Failed to fetch jokes' });
  }
});

// Get joke categories
router.get('/categories', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/categories');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Joke API error:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// Get joke with specific filters
router.get('/filtered', async (req, res) => {
  try {
    const { category = 'Any', type = 'single', contains = '' } = req.query;
    
    let url = `https://v2.jokeapi.dev/joke/${category}`;
    
    if (type === 'twopart') {
      url += `?type=twopart`;
    }

    const response = await axios.get(url);
    
    // Filter by contains if provided
    if (contains && response.data.joke) {
      if (!response.data.joke.toLowerCase().includes(contains.toLowerCase())) {
        return res.status(404).json({ message: 'No joke found with that keyword' });
      }
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Joke API error:', error);
    res.status(500).json({ message: 'Failed to fetch joke' });
  }
});

module.exports = router;
