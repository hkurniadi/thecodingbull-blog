const express = require('express');
const bodyParser = require('body-parser');
const knexSetting = require('./knexfile.js');
const knex = require('knex')(knexSetting.development);
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

/*ROUTES*/
app.get("/", (req, res) => {
  res.render('index');
});

app.get("/posts", (req, res) => {
  knex.select().from('posts').orderBy('title', 'desc')
  .then((result) => {
    // console.log(result);
    let payload = {
      allPosts: result
    };
    res.render('all_posts', payload);
  }, (err) => console.log(err))
});

app.post("/post", (req, res) => {
  // console.log(req.body);
  let payload = {
    title: req.body.title
  };

  knex.insert({
    title: req.body.title,
    description: req.body.description
  })
  .into('posts')
  .then((result) => {
    // console.log(result);
    res.render('post', payload);
  }, (err) => console.log(err))
});

app.listen(PORT, () => {
  console.log("Simple Blog App listening on port", PORT);
});