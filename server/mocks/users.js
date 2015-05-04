module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  // Read POST parameters
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': []
    });
  });

  var users = {
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

  usersRouter.post('/', function(req, res) {
    var users = ['davidchchang', 'andreisoare', 'octavdruta'];
    var password = '123';
    if (!req.body || !req.body.user) {
      res.status(404).send('Missing request body parameters');
      return;
    }
    var userid = req.body.user.id;
    if (users.indexOf(userid) === -1) {
      res.status(404).send('User ' + userid + ' not found');
      return;
    }
    if (req.body.user.meta.password !== password) {
      res.status(404).send('Invalid password');
      return;
    }
    res.status(201).send({"user": users[req.body.user.id]});
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
