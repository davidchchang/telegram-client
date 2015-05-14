module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var userFixtures = {
    'davidchchang': {
      id: "davidchchang",
      name: "David Chang",
      email: "david@telegram.com"
    },
    'andreisoare': {
      id: "andreisoare",
      name: "Andrei Soare",
      email: "andrei@telegram.com"
    },
    'octavdruta': {
      id: "octavdruta",
      name: "Octav Druta",
      email: "octav@telegram.com"
    }
  };

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': []
    });
  });

  usersRouter.post('/', function(req, res) {
    var users = ['davidchchang', 'andreisoare', 'octavdruta'];
    var password = '123';

    if (!req.body || !req.body.user) {
      return res.status(404).send('Missing request body parameters');
    }

    var userid = req.body.user.id;

    if (req.body.user.meta.operation === 'login') {
      if (users.indexOf(userid) === -1) {
        return res.status(404).send('User ' + userid + ' not found');
      }
      if (req.body.user.meta.password !== password) {
        return res.status(404).send('Invalid password');
      }
      return res.status(200).send({"user": users[userid]});
    } else if (req.body.user.meta.operation === 'signup') {
      var user = {
        id: req.body.user.id,
        name: req.body.user.name,
        email: req.body.user.email,
      }
      return res.send({
        user: user
      });

      // TODO: finish this, make sure you don't override the global "users" object

      if (users.indexOf(userid) !== -1) {
        return res.status(404).send('User already exists');
      }
      userFixtures[userid] = {
        id: req.body.user.id,
        name: req.body.user.name,
        email: req.body.user.email
      };
      return res.status(201).send({"user": users[userid]});
    }

  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      "user": users[req.params.id]
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
