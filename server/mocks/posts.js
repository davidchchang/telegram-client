module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": [
        {
          id: 1,
          author: "davidchchang",
          originalPost: null,
          content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
          timestamp: new Date("2015-03-24")
        },
        {
          id: 2,
          author: "andreisoare",
          originalPost: 1,
          content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
          timestamp: new Date("2015-03-25")
        },
        {
          id: 3,
          author: "andreisoare",
          originalPost: null,
          content: "My answer to What are the advantages of using Ember.js? http://qr.ae/qVycR",
          timestamp: new Date("2014-12-17")
        }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
