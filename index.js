const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());

const categories = require('./Data/Categories.json');
const courses = require('./Data/Courses.json');

app.get('/', (req, res) => {
    res.send('server is running');
})
app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(category => category.id === id);
    res.send(selectedCourses);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    if (id === '6') {
        res.send(courses);
    }
    else {
        const category = courses.filter(category => category.category_id === id);
        res.send(category);
    }

})


app.listen(port, () => console.log(`Edule server is running on port ${port}`));