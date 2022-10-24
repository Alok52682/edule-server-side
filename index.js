const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running');
})

app.listen(port, () => console.log(`Edule server is running on port ${port}`));