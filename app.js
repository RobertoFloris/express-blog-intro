const express = require('express')
const posts = require("./data/posts")

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) =>{
  res.send("Server del mio blog")
})

app.get('/bacheca', (req, res) =>{
  const queryImage = req.query.title;
  if(!queryImage){
    return res.json(posts)
  }
  const postImage = posts.find(post => post.titolo.includes(queryImage))
  res.json(postImage)
})

app.listen(port, () =>{
  console.log(`Sono in ascolto alla porta ${port}`);
})