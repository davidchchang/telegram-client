module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': []
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
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
