const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const categories = require('./data/categories.json');
const news = require('./data/news.json');


app.use(cors());

app.get('/',(req,res)=> {
    res.send('News the Dragon is running');
})
// sending categories
app.get('/categories',(req,res)=> {
        res.send(categories);
})
// sending news
app.get('/news',(req,res)=>{
    res.send(news);
})
// specific id news
app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    // checking one news which is match to it's id
   const selectedNews = news.find(n => n._id == id);
   res.send(selectedNews);
})

// category wise news
app.get('/categories/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    // console.log(id);
    if(id == 0) {
        res.send(news);
    } else {
        const categoryNews = news.filter( n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
   
})
app.listen(port,()=> {
    console.log(`News the Dragon API is running on: ${port}`)
})