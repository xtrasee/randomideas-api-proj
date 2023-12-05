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
});

// to add idea
router.post('/', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    }

    ideas.push(idea);

    req.json({ success: true, data: idea });
});

// update idea
router.put('/api/ideas:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found' });
    };

    idea.text = req.body.text || idea.text
    idea.tag = req.body.tag || idea.tag
    res.json({ sucess: true, data: idea });
});


router.put('/api/ideas:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found' });
    };

    const index = ideas.indexOf(idea);
    ideas.splice(index, 1);
    res.json({ sucess: true, data: idea });
});

module.exports = router;