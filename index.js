const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/category.json');

app.use(cors());
app.get('/course-categories', (req, res) =>{
    res.send(categories);
})

app.get('/', (req, res) =>{
 res.send('News Api Running');
});


app.listen(port, () =>{
    console.log('Courses news', port);
})