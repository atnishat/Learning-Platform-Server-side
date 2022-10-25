const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/category.json');
const news = require('./data/news.json');





app.use(cors());

app.get('/news/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    const selectedNews = news.find( n => n._id === id);
    res.send(selectedNews);
})
app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const category_news = news.find(n => n.category_id === id);
    res.send(category_news);
})

app.get('/course-categories', (req, res) =>{
    res.send(categories);
})

app.get('/', (req, res) =>{
 res.send('News Api Running');
});


app.listen(port, () =>{
    console.log('Courses news', port);
})