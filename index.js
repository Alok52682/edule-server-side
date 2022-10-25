const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());

const courses = require('./Data/Courses.json');

app.get('/', (req, res) => {
    res.send('server is running');
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
    res.send(course);
})


app.listen(port, () => console.log(`Edule server is running on port ${port}`));