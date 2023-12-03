const express = require('express');
const router = express.Router();

const ideas = {
};
// to get all ideas
router.get('/api/ideas', (req, res) => {
    res.json({ success: true, data: ideas });
})

// to get singular idea
router.get('/api/ideas:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found' });
    };

    res.json({ sucess: true, data: idea });
})