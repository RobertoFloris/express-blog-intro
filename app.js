const express = require('express')
const posts = require("./data/posts")

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) =>{
  res.send("Server del mio blog")
})

app.get('/bacheca', (req, res) =>{
  res.json(posts)
})

app.listen(port, () =>{
  console.log(`Sono in ascolto alla porta ${port}`);
})