module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var postsFixtures = [
    {
      id: 1,
      author: 'davidchchang',
      originalPost: null,
      postContent: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
      timestamp: new Date('2015-03-24')
    },
    {
      id: 2,
      author: 'andreisoare',
      originalPost: 1,
      postContent: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
      timestamp: new Date('2015-03-25')
    },
    {
      id: 3,
      author: 'andreisoare',
      originalPost: null,
      postContent: "My answer to What are the advantages of using Ember.js? http://qr.ae/qVycR",
      timestamp: new Date('2014-12-17')
    },
    {
      id: 4,
      author: 'jeresig',
      originalPost: null,
      postContent: "I've annotated the original 2006 version of jQuery and put it online: http://ejohn.org/blog/annotated-version-of-the-original-jquery-release/ … Lots of memories and interesting hacks!",
      timestamp: new Date('2015-04-07T19:47:00')
    },
    {
      id: 5,
      author: 'jeresig',
      originalPost: null,
      postContent: "Sad this needs to be said but jQuery doesn't 'replace' JS, it papers over the DOM. jQuery's success is proof of the failings of the DOM API.",
      timestamp: new Date('2015-04-20T17:30:00')
    },
    {
      id: 6,
      author: 'jeresig',
      originalPost: null,
      postContent: "Just a reminder that jQuery 2.x still fixes 88 bugs in modern browsers to give you a consistent dev experience: https://t.co/SBwTFg1IqM",
      timestamp: new Date('2015-04-20T17:06:00')
    },
    {
      id: 7,
      author: 'marissamayer',
      originalPost: null,
      postContent: "Moving Search Forward - yahoo: By Marissa Mayer, Yahoo CEO Today, I’m excited to announce a renewed search... http://tmblr.co/Z4v08s1iZ5-04",
      timestamp: new Date('2015-04-16T13:07:00')
    },
    {
      id: 8,
      author: 'marissamayer',
      originalPost: null,
      postContent: "Video: What 3400+ people yodeling sounds like. We shattered the record by a factor of 2 (previously 1700... http://tmblr.co/Z4v08s1er5jgM",
      timestamp: new Date('2015-03-02T20:03:00')
    },
    {
      id: 9,
      author: 'newsycombinator',
      originalPost: null,
      postContent: "Google systems guru explains why containers are the future of computing https://t.co/QhtETifRMy",
      timestamp: new Date('2015-05-19T00:01:00')
    },
    {
      id: 10,
      author: 'newsycombinator',
      originalPost: null,
      postContent: "A Few Useful Things to Know about Machine Learning [pdf] https://t.co/BEakvqvAlu",
      timestamp: new Date('2015-05-18T18:02:00')
    },
    {
      id: 11,
      author: 'google',
      originalPost: null,
      postContent: "Our self-driving car prototypes are leaving the test track & hitting the road in Mountain View http://goo.gl/Wse9cI",
      timestamp: new Date('2015-05-15T16:32:00')
    },
    {
      id: 12,
      author: 'google',
      originalPost: null,
      postContent: "The tech industry needs to do more to support diversity. Here's what we're doing about it: http://g.co/go/aajxv",
      timestamp: new Date('2015-05-05T20:58:00')
    }
  ];

  postsRouter.get('/', function(req, res) {
    if (req.query && req.query.userid) {
      return res.send({
        "posts": postsFixtures.filter(function(post) {
          return post.author === req.query.userid;
        })
      });
    }
    return res.send({
      "posts": postsFixtures
    });
  });

  postsRouter.post('/', function(req, res) {
    if (!req.body || !req.body.post) {
      return res.status(400).send('Missing request body parameters');
    }

    if (req.body.post.meta.operation === 'newPost') {
      var post = {
        id: postsFixtures.length + 1,
        author: req.body.post.author,
        originalPost: null,
        postContent: req.body.post.postContent,
        timestamp: new Date()
      };

      postsFixtures.push(post);

      return res.status(201).send({post: post});
    } else if (req.body.post.meta.operation === 'repost') {
      var repost = {
        id: new Date().getTime(),
        author: req.body.post.author,
        originalPost: req.body.post.originalPost,
        postContent: req.body.post.postContent,
        timestamp: new Date()
      };

      postsFixtures.push(repost);

      return res.status(201).send({post: repost});
    }
    return res.status(400).send('Unsupported operation: ' + req.body.post.meta.operation);
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
    if (!req.params || !req.params.id) {
      return res.status(400).send('Missing request parameters');
    }

    var postId = req.params.id;
    postsFixtures = postsFixtures.filter(function (element, index, array) {
      return element.id != postId;
    });
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
