const express = require('express');
const router = express.Router();
const User = require('../data_models/usersdb');
const bcrypt = require('bcrypt');
const authenticateToken = require('../middleware/auth');
const jwt = require('jsonwebtoken');

// POST /api/register - Rejestracja użytkownika
router.post('/users/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail i hasło są wymagane' });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ id: user.id });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Użytkownik z tym e-mailem już istnieje' });
        }
        res.status(500).json({ error: 'Błąd serwera' });
    }
});

// POST /api/login - Logowanie użytkownika
router.post('/users/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail i hasło są wymagane' });
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
        }
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Błąd serwera' });
    }
});


// GET /api/profile
router.get('/users/profile', authenticateToken, (req, res) => {
    res.json({ message: 'To jest Twoje konto', user: req.user });
});

// DELETE /api/users/:id - Usuwanie użytkownika
router.delete('/users/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    if (req.user.id !== parseInt(id, 10)) {
        return res.status(403).json({ error: 'Nie możesz usunąć innego użytkownika' });
    }

    try {
        const result = await User.destroy({ where: { id } });
        if (result === 0) {
            return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
        }
        res.status(200).json({ message: 'Użytkownik został usunięty' });
    } catch (err) {
        res.status(500).json({ error: 'Błąd serwera' });
    }
});

// PATCH /api/users/:id - Aktualizacja danych


module.exports = router;