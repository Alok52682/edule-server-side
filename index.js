const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());

// get courses from couses.jsom file
const courses = require('./Data/Courses.json');


app.get('/', (req, res) => {
    res.send('server is running');
})

// send allcourses to the link
app.get('/courses', (req, res) => {
    res.send(courses);
})

// send specific course to link by id
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
    res.send(course);
})


app.listen(port, () => console.log(`Edule server is running on port ${port}`));