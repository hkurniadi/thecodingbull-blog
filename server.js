const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

/*ROUTES*/
app.get("/", (req, res) => {
  res.render('index');
});

app.get("/posts", (req, res) => {
  let payload = {};
  res.render('all_posts', payload);
});

app.post("/post", (req, res) => {
  // console.log(req.body);
  let payload = {
    title: req.body.title
  };
  res.render('post', payload);
});

app.listen(PORT, () => {
  console.log("Simple Blog App listening on port", PORT);
});