const express = require('express');
const router = express.Router();
const Orders = require('../data_models/ordersdb');
const axios = require('axios');
const Books = 'http://localhost:3000/api/books';
const authenticateToken = require('../middleware/auth');

// GET /api/orders/:user_id - Pobranie wszystkich zamówień użytkownika
router.get('/orders/:user_id', authenticateToken, async (req, res) => {
    const user_id = req.params.user_id;
    // if (user_id!=req.user.user_id){
    //     return res.status(400).json({ error: 'Pobieranie danych tylko swoich zamowien' });
    // }
    try {
      const orders = await Orders.findAll({ where: { user_id }});
      res.json(orders);
    } catch (error) {
      console.error('Błąd:', error);
      res.status(500).json({ error: 'Błąd przy pobieraniu zamówień użytkownika' });
    }
});

// POST /api/orders - Dodanie zamówienia
router.post('/orders', authenticateToken, async (req, res) => {
    let { user_id, book_id, quantity } = req.body;
    user_id = parseInt(user_id, 10);
    book_id = parseInt(book_id, 10);
    quantity = parseInt(quantity, 10);

    if (user_id!=req.user.user_id){
        return res.status(400).json({ error: 'Dodawanie tylko swoich zamowien' });
    }

    if (isNaN(user_id) || isNaN(book_id) || isNaN(quantity)) {
        return res.status(400).json({ error: 'Nieprawidłowy format danych' });
    }

    try {
        let response;
        try {
            response = await axios.get(`${Books}/${book_id}`);
        } catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({ error: error.response.data });
            }
            return res.status(500).json({ error: 'Błąd połączenia z serwisem książek' });
        }

        if (!response || !response.data) {
            return res.status(404).json({ error: 'Książka nie istnieje' });
        }
        const newOrder = await Orders.create({ book_id, user_id, quantity });
        res.status(201).json({ message: 'Utworzono zamówienie', id: newOrder.id });
    } catch (error) {
        console.error('Błąd podczas dodawania zamówienia:', error);
        res.status(500).json({ error: 'Błąd podczas dodawania zamówienia' });
    }
});

// DELETE /api/orders/:id - Usunięcie zamówienia
router.delete('/orders/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Należy podać id zamówienia' });
    }

    try {
        const order = await Orders.findOne({ where: { id } });

        if (!order) {
            return res.status(404).json({ error: 'Nie znaleziono zamówienia' });
        }

        if (order.user_id !== req.user.user_id) {
            return res.status(403).json({ error: 'Brak uprawnień do usunięcia zamówienia' });
        }

        const deleted = await Orders.destroy({ where: { id } });
        if (deleted) {
            res.status(204).json({
                message: 'Zamówienie usunięte',
                id
            });
        } else {
            res.status(500).json({ error: 'Nie udało się usunąć zamówienia' });
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
    if (order.user_id !== req.user.user_id) {
        return res.status(403).json({ error: 'Brak uprawnień do zmiany zamówienia' });
    }
    order.quantity = quantity;
    await order.save();
    res.json({ message: "Zamówienie zaktualizowane", order }); 
});

module.exports = router;