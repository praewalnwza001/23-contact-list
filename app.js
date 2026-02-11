const express = require('express');
const app = express();
app.use(express.json());

app.get('/contacts', (req, res) => {
    res.json([{ name: 'Alice', phone: '123-456' }]);
});

app.post('/contacts', (req, res) => {
    res.status(201).json({ message: 'Contact saved' });
});

app.put('/contacts/favorite', (req, res) => {
    res.json({ message: 'Marked as favorite' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
