// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create middleware
app.use(express.json());

// Create comment object
let comments = [
    {
        id: 1,
        username: "Tom",
        comment: "Hello"
    },
    {
        id: 2,
        username: "Jerry",
        comment: "Hi"
    }
];

// Create routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(comment => comment.id === id);

    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ message: "Comment not found" });
    }
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newComment = req.body;
    const comment = comments.find(comment => comment.id === id);

    if (comment) {
        comment.username = newComment.username;
        comment.comment = newComment.comment;
        res.json(comment);
    } else {
        res.status(404).json({ message: "Comment not found" });
    }
});

app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments = comments.filter(comment => comment.id !== id);
    res.json({ message: "Comment deleted" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});