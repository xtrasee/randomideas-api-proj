const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

// to get all ideas
router.get('/', async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.json({ success: true, data: ideas });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
})

// to get singular idea
router.get('/:id', async (req, res) => {
    try {
        const idea = await Idea.findById(req.params.id);
        res.json({ sucess: true, data: idea });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    };
    
});

// to add idea
router.post('/', async (req, res) => {
    const idea = new Idea({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
    });

    try {
        const savedIdea = await idea.save();
        res.json({ success: true, data: savedIdea });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
});

// update idea
router.put('/id', async(req, res) => {
    try {
        const updatedIdea = await Idea.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    text: req.body.text,
                    tag: req.body.tag,
                    usernam: req.body.username,
                }
            },
            { new: true }
        );
        res.json({ success: true, data: updatedIdea });
    } catch (error) {
        res.json({ success: false, error: 'Something went wrong' });
    }
});


router.delete('/:id', async(req, res) => {
    try {
        await Idea.findByIdAndDelete(req.params.id);
        res.json({ success: true, data: {} });
    } catch (error) {
        res.json({ success: false, error: 'Something went wrong' });
    }
});

module.exports = router;