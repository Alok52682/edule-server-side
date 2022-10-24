const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());

const categories = require('./Data/Categories.json');

app.get('/', (req, res) => {
    res.send('server is running');
})
app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => console.log(`Edule server is running on port ${port}`));