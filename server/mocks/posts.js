module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": [
        {
          id: 1,
          author: 'davidchchang',
          originalPost: null,
          content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
          timestamp: new Date('2015-03-24')
        },
        {
          id: 2,
          author: 'andreisoare',
          originalPost: 1,
          content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
          timestamp: new Date('2015-03-25')
        },
        {
          id: 3,
          author: 'andreisoare',
          originalPost: null,
          content: "My answer to What are the advantages of using Ember.js? http://qr.ae/qVycR",
          timestamp: new Date('2014-12-17')
        },
        {
          id: 4,
          author: 'jeresig',
          originalPost: null,
          content: "I've annotated the original 2006 version of jQuery and put it online: http://ejohn.org/blog/annotated-version-of-the-original-jquery-release/ … Lots of memories and interesting hacks!",
          timestamp: new Date('2015-04-07T19:47:00')
        },
        {
          id: 5,
          author: 'jeresig',
          originalPost: null,
          content: "Sad this needs to be said but jQuery doesn't 'replace' JS, it papers over the DOM. jQuery's success is proof of the failings of the DOM API.",
          timestamp: new Date('2015-04-20T17:30:00')
        },
        {
          id: 6,
          author: 'jeresig',
          originalPost: null,
          content: "Just a reminder that jQuery 2.x still fixes 88 bugs in modern browsers to give you a consistent dev experience: https://t.co/SBwTFg1IqM",
          timestamp: new Date('2015-04-20T17:06:00')
        },
        {
          id: 7,
          author: 'marissamayer',
          originalPost: null,
          content: "Moving Search Forward - yahoo: By Marissa Mayer, Yahoo CEO Today, I’m excited to announce a renewed search... http://tmblr.co/Z4v08s1iZ5-04",
          timestamp: new Date('2015-04-16T13:07:00')
        },
        {
          id: 8,
          author: 'marissamayer',
          originalPost: null,
          content: "Video: What 3400+ people yodeling sounds like. We shattered the record by a factor of 2 (previously 1700... http://tmblr.co/Z4v08s1er5jgM",
          timestamp: new Date('2015-03-02T20:03:00')
        },
        {
          id: 9,
          author: 'newsycombinator',
          originalPost: null,
          content: "Google systems guru explains why containers are the future of computing https://t.co/QhtETifRMy",
          timestamp: new Date('2015-05-19T00:01:00')
        },
        {
          id: 10,
          author: 'newsycombinator',
          originalPost: null,
          content: "A Few Useful Things to Know about Machine Learning [pdf] https://t.co/BEakvqvAlu",
          timestamp: new Date('2015-05-18T18:02:00')
        },
        {
          id: 11,
          author: 'google',
          originalPost: null,
          content: "Our self-driving car prototypes are leaving the test track & hitting the road in Mountain View http://goo.gl/Wse9cI",
          timestamp: new Date('2015-05-15T16:32:00')
        },
        {
          id: 12,
          author: 'google',
          originalPost: null,
          content: "The tech industry needs to do more to support diversity. Here's what we're doing about it: http://g.co/go/aajxv",
          timestamp: new Date('2015-05-05T20:58:00')
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
