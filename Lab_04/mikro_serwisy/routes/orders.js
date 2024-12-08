const express = require('express');
const router = express.Router();
const Orders = require('../data_models/ordersdb');
const axios = require('axios');
const Books = 'http://localhost:3000/api/books';
const authenticateToken = require('../middleware/auth');

// GET /api/orders/:user_id - Pobranie wszystkich zamówień użytkownika
router.get('/orders/:user_id', authenticateToken, async (req, res) => {
    const userId = req.params.user_id;
    try {
      const orders = await Orders.findAll({ where: { userId }, include: Books });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Błąd przy pobieraniu zamówień użytkownika' });
    }
});

// POST /api/orders - Dodanie zamówienia
router.post('/orders', authenticateToken, async (req, res) => {
    const { user_id, book_id, quantity } = req.body;

    if (!user_id || !book_id || !quantity) {
        return res.status(400).json({ error: 'Proszę podać user_id, book_id i quantity' });
    }
    if (!Number.isInteger(user_id) || !Number.isInteger(book_id) || !Number.isInteger(quantity)) {
        return res.status(400).json({ error: 'Nieprawidłowy format danych (oczekiwane liczby całkowite)' });
    }
    try {
        // Weryfikacja, czy książka istnieje
        try{
            const response = await axios.get(`${Books}/${book_id}`);
        }
        catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({ error: error.response.data });
            }
            return res.status(500).json({ error: 'Błąd połączenia z serwisem książek' });
        }
        if (!response.data) {
            return res.status(404).json({ error: 'Książka nie istnieje' });
        }
        const newOrder = await Orders.create({ book_id, user_id, quantity });
        res.status(201).json({ message: 'Utworzono zamówienie', id: newOrder.id });
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: 'Książka nie istnieje' });
        }
        return res.status(500).json({ error: 'Błąd podczas dodawania zamówienia' });
    }
});

// DELETE /api/orders/:id - Usunięcie zamówienia
router.delete('/orders/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    if (!id){
        return res.status(400).json({ error: 'Należy podać id zamówienia' });
    }
    try {
        const deleted = await Orders.destroy({ where: { id: req.params.id } });
        if (deleted) {
          res.status(204).json({
              message: 'Zamówienie usunięte',
              id: req.params.id
          });
        } else {
          res.status(404).json({ error: 'Nie znaleziono zamówienia' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Błąd przy usuwaniu zamówienia' });
      }
  });

// PATCH /api/orders/:id - Aktualizacja zamówienia
router.patch('/orders/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity === undefined) {
        return res.status(400).json({ error: 'Należy podać ilość (quantity)' });
    }
    const order = await Orders.findByPk(id);
    if (!order) {
        return res.status(404).json({ error: "Nie znaleziono zamówienia" });
    }
    order.quantity = quantity;
    await order.save();
    res.json({ message: "Zamówienie zaktualizowane", order }); 
});

module.exports = router;