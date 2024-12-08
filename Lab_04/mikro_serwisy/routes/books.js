const express = require('express');
const router = express.Router();
const Books = require('../data_models/booksdb');

// GET /api/books - wszystkie książki
router.get('/books', async (req, res) => {
  try {
    const books = await Books.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/books/:id - książka po ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await Books.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Książka nie znaleziona' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/books - dodawanie nowej książki
router.post('/books', async (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
      return res.status(400).json({ error: 'Brak wymaganych danych: title, author, year' });
    }

    const book = await Books.create({ title, author, year });
    res.status(201).json({ id: book.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/books/:id - usuwanie książki
router.delete('/books/:id', async (req, res) => {
  try {
    const book = await Books.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.status(200).json({ message: 'Książka została usunięta' });
    } else {
      res.status(404).json({ error: 'Książka nie znaleziona' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
