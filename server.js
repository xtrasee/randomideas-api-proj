const express = require('express');
const { resourceLimits } = require('worker_threads');
const port = 5000;

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the RandomIdeas API' });
});

// to get all ideas
app.get('/api/ideas', (req, res) => {
    res.json({ success: true, data: ideas });
})

// to get singular idea
app.get('/api/ideas:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found' });
    };

    res.json({ sucess: true, data: idea });
})

app.listen(port, () => console.log(`Server listening on port ${port}`));