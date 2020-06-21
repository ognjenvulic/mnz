const router = require('express').Router();
const BlogPost = require('../models/blogPost');

router.get('/', (req, res) => {
  BlogPost.find({})
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log("error")
    })
});

router.post('/save', (req, res) => {
  console.log('Body:', req.body);
  const data = req.body;
  const newBlogPost = new BlogPost(data);

  newBlogPost.save((error) => {
    if (error) {
      res.status(500).json({msg: 'Internal Server Error'});
      return
    }
    res.json({
      msg: "Your data has been saved!!!"
    })
  });
});

router.get('/name', (req, res) => {
  const data = {
    username: 'mare',
    age: 38
  };
  res.json(data);
});


module.exports = router;