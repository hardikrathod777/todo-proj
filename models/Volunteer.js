const express = require('express');

module.exports = (volunteers) => {
  const router = express.Router();

  // Get all volunteers
  router.get('/', (req, res) => {
    res.render('index', {
      volunteers
    });
  });

  // Show form to register new volunteer
  router.get('/register', (req, res) => {
    res.render('register');
  });

  // Register new volunteer
  router.post('/register', (req, res) => {
    const { name, email, phone, skills } = req.body;
    volunteers.push({ id: Date.now().toString(), name, email, phone, skills });
    res.redirect('/');
  });

  // Show edit form
  router.get('/edit/:id', (req, res) => {
    const volunteer = volunteers.find(v => v.id === req.params.id);
    res.render('edit', { volunteer });
  });

  // Update volunteer
  router.post('/edit/:id', (req, res) => {
    const index = volunteers.findIndex(v => v.id === req.params.id);
    volunteers[index] = { id: req.params.id, ...req.body };
    res.redirect('/');
  });

  // Delete volunteer
  router.get('/delete/:id', (req, res) => {
    volunteers = volunteers.filter(v => v.id !== req.params.id);
    res.redirect('/');
  });

  return router;
};
